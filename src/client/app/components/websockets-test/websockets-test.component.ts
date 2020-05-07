import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as shortid from 'shortid';
import { Subscription } from 'rxjs';

import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { WebSocketsService } from '../../services/websockets/websockets.service';

@Component({
  selector: 'app-websockets-test',
  templateUrl: './websockets-test.component.html'
})
export class WebsocketsTestComponent implements OnInit, OnDestroy {

  @Input()
  title: string = 'NestJS WebSockets test';

  message: string = '';

  get messageReady(): boolean {
    return this.message.trim().length > 0;
  }

  messages: string[] = [
    'Build in message #1',
    'Build in message #2'
  ]

  private cid: string;

  private onWebSocketMessage$: Subscription;

  constructor(
    public wss: WebSocketsService
  ) { }

  ngOnInit(): void {
    this.cid = shortid.generate();
    this.onWebSocketMessage$ = this.wss.onMessageReceived$.subscribe(
      (dto: WebSocketsDto) => {
        if (dto.cid !== this.cid) return; // message not our component 
        if (dto.theme === WebSocketsTheme.SendBackData) {
          this.messages.push(dto.content);
        }
      }
    );
    this.wss.connect();
  }

  ngOnDestroy(): void {
    this.onWebSocketMessage$.unsubscribe();
  }

  sendMessageToServer() {
    const dto: WebSocketsDto = {
      cid: this.cid,
      theme: WebSocketsTheme.SendBackData,
      content: this.message
    };
    this.wss.send(dto);
  }

}
