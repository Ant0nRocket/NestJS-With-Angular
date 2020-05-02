import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ServicesModule } from '../services.module';
import { apiConfig } from '../../../../shared/api.config';
import { environment } from '../../../environments/environment';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';

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
  private pingPongInterval = 20000;

  /** 
   * Set to true if you need to start reconnection procedure
   * on error or close
   */
  private reconnectOnClose = true;

  /** 
   * If WebSocket closed because of some error it will
   * try to reconnect every 5 seconds
   */
  private reconnectionOnErrorInterval = 5000;

  /** Max amount of reconnection attempts */
  private reconnectionAttemptsLimit = 10;

  /** Currect reconnection attempts count */
  private reconnectionAttemptsPassed = 0;

  /** 
   * Reconnections limit reached. It's important to stop reconnection
   * attempts after some amout fails 'cause of memory leaks
   */
  private get reconnectionAttemptsLimitReached(): boolean {
    return this.reconnectionAttemptsPassed >= this.reconnectionAttemptsLimit;
  }

  /** Whether websocket open or not */
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
    this.reconnectOnClose = true;

    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.reconnectionAttemptsPassed = 0;
    };

    this.ws.onmessage = (ev) => { // received message
      try {
        const data: WebSocketsDto = JSON.parse(ev.data);
        this.onMessageReceived$.next(data);
      } catch {
        this.onMessageReceived$.next({
          cid: '',
          theme: WebSocketsTheme.BadDto,
          content: ev.data
        });
      }
    };

    this.ws.onclose = () => {
      if (this.reconnectOnClose) {
        setTimeout(() => {
          if (!this.reconnectionAttemptsLimitReached && !this.ready) {
            this.reconnectionAttemptsPassed++;
            this.connect();
          }
        }, this.reconnectionOnErrorInterval);
      }
    };
  }

  /** 
   * Closes connection to server (if it's in OPEN state) and blocks
   * reconnection by setting reconnectOnClose to false.
   */
  close() {
    this.reconnectOnClose = false;
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
    if (!m) m = '';
    const message2send = typeof m === 'string' ? m : JSON.stringify(m);
    this.ws.send(message2send);
  }
}
