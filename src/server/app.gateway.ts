import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Logger, Injectable } from '@nestjs/common';
import * as shortid from 'shortid';
import { IWebSocketsEvent } from '../shared/websockets/websockets-event.interface';
import { WebSocketsDto } from '../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../shared/websockets/websockets-theme.enum';

@Injectable()
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
        сid: "",
        theme: WebSocketsTheme.ClientConnected,
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
  handleMessage(client: any, data: any): WsResponse<WebSocketsDto> {
    const handledData = this.handleDataTheme(data);
    const response: WsResponse<WebSocketsDto> = {
      event: 'msg2client',
      data: handledData
    };
    return response;
  }

  handleDataTheme(data: WebSocketsDto): WebSocketsDto {
    if (data.theme === WebSocketsTheme.SendBackData) {
      return data;
    }

    if (data.theme === WebSocketsTheme.HowManyClientsConnected) {
      data.content = this.server.clients.length;
    }
  }
}
