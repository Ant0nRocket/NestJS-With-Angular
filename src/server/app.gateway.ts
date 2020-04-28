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

@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(
    private usersRepository: UsersRepository
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
    const token = jwt.decode(dto.content);
    if (!token) {
      this.logger.error(`Client ${client.id} provided invalid auth token`);
      return;
    }

    const { id } = token as JwtPayload;
    if (!id) {
      this.logger.error(`Client ${client.id} provided token with no id`);
      return;
    }

    const user = await this.usersRepository.getUserBy({ _id: id });
    if (!user) {
      this.logger.error(`No user with id ${id} found`);
      return;
    }

    // User password hash is a sign key for jwt, let's validate
    try {
      jwt.verify(dto.content as string, user.password);
      client.userId = user._id;
      clearTimeout(client.disconnectTimer);

      this.logger.log(`Client ${client.id} authorized. User is ${client.userId}`);
    } catch (err) {
      this.logger.error(`Token verification error (client ${client.id}): ${err}`)
    }
  }
}
