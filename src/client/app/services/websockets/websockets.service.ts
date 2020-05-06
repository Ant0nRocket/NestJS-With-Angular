import { Injectable, EventEmitter } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { ServicesModule } from '../services.module';
import { WebSocketOptions } from './websocket.options';
import { AuthService } from '../auth/auth.service';

import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';

@Injectable({
  providedIn: ServicesModule
})
export class WebSocketsService {

  /** Instance of WebSocket */
  private ws: WebSocket;

  /** Connection options */
  private options: WebSocketOptions = new WebSocketOptions();

  /**  */
  private intervPingPong: number;

  /** Currect reconnection attempts count */
  private reconnectionAttemptsPassed = 0;

  /** 
   * Reconnections limit reached. It's important to stop reconnection
   * attempts after some amout fails 'cause of memory leaks
   */
  private get reconnectionAttemptsLimitReached(): boolean {
    return this.reconnectionAttemptsPassed >= this.options.reconnectionAttemptsLimit;
  }

  /** Whether websocket open or not */
  public get ready(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  /** Emits when there is new message from server */
  public onMessageReceived$: EventEmitter<WebSocketsDto> = new EventEmitter();

  constructor(private authService: AuthService) { }

  /** 
   * Connects to WebSocket server. 
   * If there is an open connection then nothing will happen.
   */
  public connect(options?: WebSocketOptions, onOpenCallback?: () => void) {
    if (this.ready) return;
    if (options) this.options = options;

    //----------

    this.ws = new WebSocket(this.options.url);
    this.ws.onopen = () => {
      this.reconnectionAttemptsPassed = 0;
      if (onOpenCallback) onOpenCallback();

      this.intervPingPong =
        window.setInterval(() => { this.send() }, this.options.pingPongIntervalMs);

      this.authService.onAuthStateChanged$.pipe( // on authToken = null -> close ws
        takeWhile(state => state === true)
      ).subscribe(null, null, /*complete*/() => {
        this.ws?.close();
      })
    };


    //----------

    this.ws.onmessage = (ev) => { // received message
      try {
        const data: WebSocketsDto = JSON.parse(ev.data);
        if (data.theme === WebSocketsTheme.ClientConnected) {
          this.sendAuthToken();
        } else {
          this.onMessageReceived$.emit(data);
        }
      } catch {
        this.onMessageReceived$.emit({
          cid: '',
          theme: WebSocketsTheme.BadDto,
          content: ev.data
        });
      }
    };

    //----------

    this.ws.onclose = () => {
      window.clearInterval(this.intervPingPong);

      if (this.options.reconnectOnClose) {
        setTimeout(() => {
          if (!this.reconnectionAttemptsLimitReached && !this.ready) {
            this.reconnectionAttemptsPassed++;
            this.connect();
          }
        }, this.options.reconnectionOnErrorInterval);
      }
    };
  }

  /** Sends provided JWT token DTO to server */
  private sendAuthToken() {
    const dto: WebSocketsDto = {
      cid: '',
      theme: WebSocketsTheme.AuthenticateWithToken,
      content: this.authService.authToken
    };
    this.send(dto);
  }

  /** 
   * Closes connection to server (if it's in OPEN state) and blocks
   * reconnection by setting reconnectOnClose to false.
   */
  public close() {
    const oldOptionReconnectOnClose = this.options.reconnectOnClose;
    this.options.reconnectOnClose = false;
    this.ws?.close();
    this.options.reconnectOnClose = oldOptionReconnectOnClose;
  }

  /** 
   * Sends a WebSocketsDto to server.   
   * If Connection is not OPEN then nothing will happen.   
   * If no WebSocketsDto provided then empty string will be sent.   
   * It can be useful in Ping-Pong algorythm.
   */
  public send(m?: WebSocketsDto | string) {
    if (!this.ready) return;
    if (!m) m = '';
    const message2send = typeof m === 'string' ? m : JSON.stringify(m);
    this.ws.send(message2send);
  }
}
