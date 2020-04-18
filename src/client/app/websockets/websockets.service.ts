import { Injectable } from '@angular/core';
import { IWebSocketsEvent } from '../../../shared/websockets/websockets-event.interface';
import { environment } from '../../environments/environment';
import { apiConfig } from '../../../shared/api.config';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  onMessage: Subject<IWebSocketsEvent> = new Subject<IWebSocketsEvent>();

  private ws: WebSocket;
  private url: string;

  constructor(
  ) {
    this.url = 'ws://' + location.host;
    if (!environment.production) {
      // in dev mode backend usualy on 3000 port, so let's change it
      this.url = this.url.replace('4200', `${apiConfig.apiPort}`);
    }

    this.connect();
  }


  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.ws.onmessage = (ev) => {
        this.onMessage.next(JSON.parse(ev.data));
      }
    }

    this.ws.onerror = () => {
      console.log('WebSocket error occured. Disconnected.');
      this.ws.close();
      setTimeout(() => { this.reconnect(); }, 5000);
    }
  }


  reconnect() {
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.close();
    }
    console.log(`Attempting to reconect to socket at ${this.url}`);
    this.connect();
  }


  send(wsEvent: IWebSocketsEvent): boolean {
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.send(JSON.stringify(wsEvent));
      return true;
    }
    return false;
  }

  // constructor() {
  //   // // console.log(location);
  //   // let url = location.host + '/socket';
  //   // if(!environment.production) { // if DEBUG
  //   //   url = url.replace(':4200', ':3000');
  //   // }
  //   // console.log(url);

  //   const ws = new WebSocket('http://localhost:3000');

  //   ws.onerror = (ev) => {
  //     console.log(ev);
  //   }
  //   ws.onopen = (ev) => {
  //     const m: IWebSocketsEvent = { event: 'msg2srv', data: 'test' }
  //     ws.send(JSON.stringify(m));
  //   }




  //   console.log(ws);
  // }

  // constructor(
  //   private socket: Socket
  // ) {
  //   socket.on('error', () => {
  //     console.log('ERROR');
  //   });

  //   socket.emit('msg2srv', 'test', () => {
  //     console.log('done');
  //   })
  // }



}
