import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
// import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
// import { IWebSocketsEvent } from '../../../shared/websockets/websockets-event.interface';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  // private websocketSubject: WebSocketSubject<IWebSocketsEvent>;

  // constructor() {
  //   // // console.log(location);
  //   // let url = location.host + '/socket';
  //   // if(!environment.production) { // if DEBUG
  //   //   url = url.replace(':4200', ':3000');
  //   // }
  //   // console.log(url);

  //   const ws = new WebSocket('ws://localhost:3000/socket');
  //   console.log(ws);
  // }

  constructor(
    private socket: Socket
  ) {
    console.log(socket);
    socket.emit('msg2srv', 'test', () => {
      console.log('done');
    })
  }
}
