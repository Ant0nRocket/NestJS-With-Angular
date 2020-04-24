import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from '../../websockets/websockets.service';
import * as shortid from 'shortid';
import { Observable } from 'rxjs';
import { IWebSocketsEvent } from '../../../../shared/websockets/websockets-event.interface';

@Component({
  selector: 'app-websockets-test',
  templateUrl: './websockets-test.component.html'
})
export class WebsocketsTestComponent implements OnInit {

  title: string = 'NestJS WebSockets test';
  message: string = '';
  obs: Observable<IWebSocketsEvent>;

  messages: string[] = [
    'Message 1',
    'Message 2'
  ]

  private uid: string;

  constructor(
    private wss: WebSocketsService
  ) {
    this.uid = shortid.generate();
  }

  ngOnInit(): void {

    this.obs = this.wss.getSubjectFor(this.uid);
    this.obs.subscribe(
      (event) => {
        this.messages.push(event.data.content);
      }
    );
  }

  sendMessageToServer() {
    this.wss.send(this.uid, this.message);
  }

}
