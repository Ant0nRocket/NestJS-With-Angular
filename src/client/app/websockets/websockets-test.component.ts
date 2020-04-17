import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from './websockets.service';

@Component({
  selector: 'app-websockets-test',
  templateUrl: './websockets-test.component.html'
})
export class WebsocketsTestComponent implements OnInit {

  title: string = 'NestJS WebSockets test';
  message: string = '';

  messages: string[] = [
    'Message 1',
    'Message 2'
  ]

  constructor(
    private wss: WebSocketsService
  ) { }

  ngOnInit(): void {
  }

  sendMessageToServer() {
    this.messages.push(this.message);
    this.message = '';
  }

}
