import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { environment } from '../../../environments/environment';
import { ServiceBus } from '../service-bus.service';
import { ServicesModule } from '../services.module';

@Injectable({
  providedIn: ServicesModule
})
export class WebSocketsService {

  private ws: WebSocket;
  private url: string;

  private pingPongInterval: number;

  private outgoingMessagesSub: Subscription;

  public ready = false;

  constructor(
    private serviceBus: ServiceBus,
  ) {
    let wsProtocolPrefix = 'ws://';
    if (location.protocol === 'https:')
      wsProtocolPrefix = 'wss://';

    this.url = wsProtocolPrefix + location.host;
    if (!environment.production) {
      // in dev mode backend usualy on 3000 port, so let's change it
      this.url = this.url.replace('4200', '3000');
    }

    this.serviceBus.onAuthSuccess.subscribe(() => {
      this.connect();
    });

    this.serviceBus.onAuthFailed.subscribe(() => {
      this.ws?.close();
    });

    // Inside there is a ping-pong implementation, nothing scary
    this.serviceBus.onWebSocketConnected.subscribe((value: boolean) => {
      this.ready = value;
      if (value) { // connected
        this.pingPongInterval = window.setInterval(() => {
          this.ws?.send('');
        }, 23456);
      } else {
        window.clearInterval(this.pingPongInterval);
      }
    });
  }

  private connect() {
    this.ws?.close();
    this.ws = new WebSocket(this.url);

    this.ws.onopen = (event) => {
      this.serviceBus.onWebSocketConnected.emit(true);
      this.outgoingMessagesSub = this.serviceBus
        .onOutgoingWebSocketMessage
        .subscribe((m: WebSocketsDto) => {
          this.ws.send(JSON.stringify(m));
        });
    }

    this.ws.onmessage = (ev) => { // received message
      if (ev.data === '') return; // pong signal, skip
      const data: WebSocketsDto = JSON.parse(ev.data);
      this.serviceBus.onIncomingWebSocketMessage.next(data);
    }

    this.ws.onerror = () => {
      this.outgoingMessagesSub.unsubscribe();
      this.serviceBus.onWebSocketConnected.emit(false);
      this.ws.close();
      // let's try reconnect every 5 sec.
      setTimeout(() => { this.reconnect(); }, 5000);
      console.log('WebSocket error occured. Disconnected.');
    }

    this.ws.onclose = () => {
      this.outgoingMessagesSub.unsubscribe();
      this.serviceBus.onWebSocketConnected.emit(false);
      console.log(`WebSocket connection to ${this.url} was closed.`)
    }
  }

  private reconnect() {
    console.log(`Attempting to reconect to socket at ${this.url}`);
    this.connect();
  }
}
