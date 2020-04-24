import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import * as shortid from 'shortid';
import { IWebSocketsEvent } from '../shared/websockets/websockets-event.interface';
import { WebSocketsDto } from '../shared/websockets/websockets.dto';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  private server: any;

  private logger: Logger = new Logger('AppGateway', true);

  afterInit() {
    this.logger.log('Websocket started.');
  }

  handleConnection(client: any, ...args: any[]) {
    client.id = shortid.generate();
    const ev: IWebSocketsEvent = {
      event: "connected",
      data: {
        uid: shortid.generate(),
        content: client.id
      }
    };
    client.send(JSON.stringify(ev));
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('msg2srv')
  handleMessage(client: any, data: any): WsResponse<string> {
    return { event: 'msg2client', data };
  }
}
