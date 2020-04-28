import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { apiConfig } from '../../../shared/api.config';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { WebSocketsDto } from '../../../shared/websockets/websockets.dto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  private webSocketSubject: Subject<WebSocketsDto> = new Subject<WebSocketsDto>();

  private ws: WebSocket;
  private url: string;

  constructor(
  ) {
    console.log('WebSockets service created');
    this.url = 'ws://' + location.host;
    if (!environment.production) {
      // in dev mode backend usualy on 3000 port, so let's change it
      this.url = this.url.replace('4200', `${apiConfig.apiPort}`);
    }

    this.connect();
  }


  private connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = (event) => {
      console.log(`WebSocket connection established to ${this.url}`);
    }

    this.ws.onmessage = (ev) => {
      const data: WebSocketsDto = JSON.parse(ev.data);
      this.webSocketSubject.next(data);
    }

    this.ws.onerror = () => {
      console.log('WebSocket error occured. Disconnected.');
      this.ws.close();
      // let's try reconnect every 5 sec.
      setTimeout(() => { this.reconnect(); }, 5000);
    }

    this.ws.onclose = () => {
      console.log(`WebSocket connection to ${this.url} was closed.`)
    }
  }

  private reconnect() {
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.close();
    }
    console.log(`Attempting to reconect to socket at ${this.url}`);
    this.connect();
  }

  /** 
   * Use this if your component needs to receive all
   * messages from websocket income (some service, etc.).
   * Otherwise use getSubjectFor(cid: string).
   */
  getSubject(): Observable<WebSocketsDto> {
    return this.webSocketSubject.asObservable();
  }

  /** 
   * Use when you need to receive only component-binded messages.
   * Your component should provide any kind of ID.
   */
  getSubjectFor(uid: string): Observable<WebSocketsDto> {
    return this.webSocketSubject.pipe(
      filter(ev => ev.cid === uid)
    );
  }

  /**
   * Sends message to server. Pay attension, if you have
   * subscription from getSubscriptionFor() you should 
   * provide same components ID (dto.cid) as in subscription.
   * See websockets-test.component.ts for example.
   * @param dto 
   */
  send(dto: WebSocketsDto): boolean {
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.send(JSON.stringify(dto));
      return true;
    }
    return false;
  }
}
