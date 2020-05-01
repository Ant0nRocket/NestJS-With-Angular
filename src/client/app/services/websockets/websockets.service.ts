import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { environment } from '../../../environments/environment';
import { ServicesModule } from '../services.module';
import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';
import { apiConfig } from '../../../../shared/api.config';

@Injectable({
  providedIn: ServicesModule
})
export class WebSocketsService {

  /** Instance of WebSocket */
  private ws: WebSocket;

  /** Connection URL */
  private url: string;

  /** 
   * For exanple, Heroku closes any connection in 30 sec. 
   * if there were no packages transmited. 
   * Below there is Ping-Pong code which fire every 25000 ms.
   */
  private pingPongInterval = 1000;

  /** 
   * If WebSocket closed because of some error it will
   * try to reconnect every 5 seconds
   */
  private reconnectionOnErrorInterval = 5000;

  /** Just a subscription on outgoing messages */
  private outgoingMessagesSub: Subscription;

  public get ready(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  public onMessageReceived$: Subject<WebSocketsDto> = new Subject();

  constructor() {
    // if your you have HTTPS connection then (at least Firefox) will
    // block attempts to connect to ws:// resources because they are
    // "insecure connection"'s. In that case you should provide wss:// url
    const wsProtocolPrefix = location.protocol.startsWith('https') ? 'wss://' : 'ws://';
    this.url = wsProtocolPrefix + location.host + apiConfig.urlWebSocket;

    if (!environment.production) {
      // in dev mode backend usualy on 3000 port, so let's change it
      this.url = this.url.replace('4200', '3000');
    } else {
      // in production mode it's a good idea to ping-pong server sometimes ;)
      setInterval(() => { this.send() }, this.pingPongInterval);
    }
  }

  /** 
   * Connects to WebSocket server. 
   * If there is an open connection then nothing will happen.
   */
  public connect() {
    if (this.ready) return;

    this.ws = new WebSocket(this.url);

    this.ws.onmessage = (ev) => { // received message
      try {
        const data: WebSocketsDto = JSON.parse(ev.data);
        this.onMessageReceived$.next(data);
      } catch {
        this.onMessageReceived$.next({
          cid: '',
          theme: WebSocketsTheme.UnknownCommand,
          content: ev.data
        });
      }
    }

    this.ws.onclose = () => {
      console.log(`WebSocket connection to ${this.url} was closed.`);
    }

    this.ws.onerror = (ev) => {
      setTimeout(() => {
        this.connect();
      }, this.reconnectionOnErrorInterval);
    }
  }

  close() {
    this.ws?.close();
    console.log('WebSocket connection closed on demand. No reconnection scheduled.');
  }

  /** 
   * Sends a WebSocketsDto to server.   
   * If Connection is not OPEN then nothing will happen.   
   * If no WebSocketsDto provided then empty string will be sent.   
   * It can be useful in Ping-Pong algorythm.
   */
  send(m?: WebSocketsDto | string) {
    if (!this.ready) return;
    const message2send = typeof m === 'string' ? m : JSON.stringify(m);
    this.ws.send(message2send);
  }
}
