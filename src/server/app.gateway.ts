import {
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger, Injectable } from '@nestjs/common';
import * as shortid from 'shortid';
import * as jwt from 'jsonwebtoken';
import { WebSocketsDto } from '../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../shared/websockets/websockets-theme.enum';
import { UsersRepository } from './db/users.repository';
import { apiConfig } from '../shared/api.config';
import { JwtPayload } from '../shared/auth/jwt-payload';
import { AuthService } from './auth/auth.service';
import { User } from '../shared/models/user';

@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(
    private authService: AuthService,
  ) { }

  @WebSocketServer()
  private server: any;

  private logger: Logger = new Logger('AppGateway', true);

  afterInit() {
    this.logger.log('Websocket started.');
  }

  /**
   * Moment where new client just connected
   * @param client client end-point (WebSocket)
   * @param args connection arguments (headers, etc.)
   */
  handleConnection(client: any, ...args: any[]) {
    client.id = shortid.generate(); // don't used now. Just an ID of socket.
    (client as WebSocket).onmessage = (ev) => {
      // ev.target is a client socket, and ev.data is a message from client
      this.handleDto(ev.target as WebSocket, JSON.parse(ev.data));
    };

    this.logger.log(`Client connected: ${client.id}`);

    // Notify client that it's connected...
    this.send2Client(client as WebSocket, WebSocketsTheme.ClientConnected);

    // ... and start timer that wait apiConfig.socketAuthDelay ms for client
    // to provide auth token. If no token - client will be disconnected
    client.disconnectTimer = setTimeout(() => {
      this.send2Client(client, WebSocketsTheme.Unauthorized);
      (client as WebSocket).close();
    }, apiConfig.socketAuthDelay);
  }

  handleDisconnect(client: WebSocket) {
    client.onmessage = null; // not sure that it's required
    this.logger.log(`Client disconnected: ${(client as any).id}`);
  }

  /**
   * Function that bypass received DTO's depending on it's theme
   * @param client client WebSocket
   * @param dto received DTO
   */
  handleDto(client: WebSocket, dto: WebSocketsDto): void {
    // if client send something before authentication...
    if (!(client as any).userId &&
      dto.theme !== WebSocketsTheme.AuthenticateWithToken)
      return; // ... then just skip this message.

    switch (dto.theme) {
      case WebSocketsTheme.SendBackData: {
        this.send2Client(client, dto.theme, dto.content, dto.cid); break;
      }

      case WebSocketsTheme.AuthenticateWithToken: {
        this.handleClientAuthentication(client, dto); break;
      }

      default: {
        this.send2Client(client, WebSocketsTheme.UnknownCommand); break;
      }
    }
  }


  /**
   * Generates DTO and sends it to cpecified client
   */
  send2Client(client: WebSocket, theme: WebSocketsTheme, content: any = {}, cid: string = ''): void {
    const dto: WebSocketsDto = {
      cid,
      theme,
      content
    }
    client.send(JSON.stringify(dto));
  }


  /**
   * Connected clients must provide valid auth tokens.
   * This function validates this tokens and if token valid
   * it stops client disconnection timer, so that client
   * can continue working.
   * If token is invalid client will be automatically disconnected.
   */
  async handleClientAuthentication(client: any, dto: WebSocketsDto) {
    const tokenIsValid = await this.authService
      .isTokenValid(dto.content, (user: User) => {
        client.userId = user._id;
      });

    if (tokenIsValid) {
      clearTimeout(client.disconnectTimer);
      this.logger.log(`Client ${client.id} authorized. User is ${client.userId}`);
    } else {
      this.logger.error(`Token of client ${client.id} is invalid`);
    }
  }
}
