import { Injectable, EventEmitter } from '@angular/core';
import { WebSocketsDto } from '../../../shared/websockets/websockets.dto';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class ServiceBus {

  /////////////////////////////////////////////////////////////////////////////
  // AUTHORIZATION

  /** Occures when there is some sign-up error */
  onSignUpError: EventEmitter<string> = new EventEmitter();

  /** 
   * Occures when there is successfull (auth token become not-null).
   * It could happen in two cases: sign-up or login sucessfull and auth
   * token returned from server.
   */
  onAuthSuccess: EventEmitter<void> = new EventEmitter();

  /** Occures on auth failed (auth token become null) */
  onAuthFailed: EventEmitter<string> = new EventEmitter();

  /////////////////////////////////////////////////////////////////////////////
  // WEBSOCKETS

  /**
   * By default WebSockets service emittes new messages here.
   * If you need incoming websockets messages - subscribe this emitter. 
   */
  onIncomingWebSocketMessage: EventEmitter<WebSocketsDto> = new EventEmitter();

  /** 
   * By default only WebSockets service subscribed on this subject.
   * Put your outgoing messages here (by calling next or emit methods).
   * If you need that any other service/component consume outgoing 
   * messages - fill free to subscribe.
   */
  onOutgoingWebSocketMessage: EventEmitter<WebSocketsDto> = new EventEmitter();


  /** If true - websocket connection, false - disconnected */
  onWebSocketConnected: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
