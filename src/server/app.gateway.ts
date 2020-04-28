import {
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger, Injectable } from '@nestjs/common';
import * as shortid from 'shortid';
import { WebSocketsDto } from '../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../shared/websockets/websockets-theme.enum';
import { UsersRepository } from './db/users.repository';
import { apiConfig } from '../shared/api.config';

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

  handleConnection(client: any, ...args: any[]) {
    client.id = shortid.generate();
    (client as WebSocket).onmessage = (ev) => {
      this.handleDto(ev.target as WebSocket, JSON.parse(ev.data));
    };

    this.logger.log(`Client connected: ${client.id}`);
    this.send2Client(client as WebSocket, WebSocketsTheme.ClientConnected);

    // let's start timer that wait 10 sec for client
    // to provide auth token. If no token - disconnect client
    client.disconnectTimer = setTimeout(() => {
      this.send2Client(client, WebSocketsTheme.Unauthorized);
      (client as WebSocket).close();
    }, apiConfig.socketAuthDelay);
  }

  handleDisconnect(client: WebSocket) {
    client.onmessage = null; // not sure that it's required
    this.logger.log(`Client disconnected: ${(client as any).id}`);
  }

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

  send2Client(client: WebSocket, theme: WebSocketsTheme, content: any = {}, cid: string = ''): void {
    const dto: WebSocketsDto = {
      cid,
      theme,
      content
    }
    client.send(JSON.stringify(dto));
  }


  handleClientAuthentication(client: any, dto: WebSocketsDto) {
    this.logger.log(`Client ${client.id} authorized with token ${dto.content}`);
    clearTimeout(client.disconnectTimer);
  }
}
