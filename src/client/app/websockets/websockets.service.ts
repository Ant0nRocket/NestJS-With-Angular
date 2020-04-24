import { Injectable } from '@angular/core';
import { IWebSocketsEvent } from '../../../shared/websockets/websockets-event.interface';
import { environment } from '../../environments/environment';
import { apiConfig } from '../../../shared/api.config';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  private webSocketSubject: Subject<IWebSocketsEvent> = new Subject<IWebSocketsEvent>();

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


  private connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log(`WebSocket connection established to ${this.url}`);
      this.ws.onmessage = (ev) => {
        this.webSocketSubject.next(JSON.parse(ev.data));
      }
    }

    this.ws.onerror = () => {
      console.log('WebSocket error occured. Disconnected.');
      this.ws.close();
      // let's try reconnect every 5 sec.
      setTimeout(() => { this.reconnect(); }, 5000);
    }
  }

  private reconnect() {
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.close();
    }
    console.log(`Attempting to reconect to socket at ${this.url}`);
    this.connect();
  }

  getSubjectFor(uid: string): Observable<IWebSocketsEvent> {
    return this.webSocketSubject.pipe(
      filter(ev => ev.data.uid === uid)
    );
  }

  send(uid: string, content: string): boolean {
    if (this.ws.readyState === this.ws.OPEN) {
      const ev: IWebSocketsEvent = {
        event: 'msg2srv',
        data: {
          uid,
          content
        }
      };
      this.ws.send(JSON.stringify(ev));
      return true;
    }
    return false;
  }
}
