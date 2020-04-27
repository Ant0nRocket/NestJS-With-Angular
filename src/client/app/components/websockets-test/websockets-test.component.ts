import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from '../../websockets/websockets.service';
import * as shortid from 'shortid';
import { Observable } from 'rxjs';
import { IWebSocketsEvent } from '../../../../shared/websockets/websockets-event.interface';
import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';

@Component({
  selector: 'app-websockets-test',
  templateUrl: './websockets-test.component.html'
})
export class WebsocketsTestComponent implements OnInit {

  title: string = 'NestJS WebSockets test';
  message: string = '';
  obs: Observable<IWebSocketsEvent>;

  messages: string[] = [
    'Build in message #1',
    'Build in message #2'
  ]

  private uid: string;

  constructor(
    private wss: WebSocketsService
  ) {

  }

  ngOnInit(): void {
    this.uid = shortid.generate();

    this.obs = this.wss.getSubjectFor(this.uid);
    this.obs.subscribe(
      (event) => {
        if (event.data.theme === WebSocketsTheme.SendBackData) {
          this.messages.push(event.data.content);
        }
      }
    );
  }

  sendMessageToServer() {
    const dto: WebSocketsDto = {
      сid: this.uid,
      theme: WebSocketsTheme.SendBackData,
      content: this.message
    };
    this.wss.send(dto);
  }

}
