import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { WebsocketsTestComponent } from './websockets-test.component';
import { WebSocketsService } from './websockets.service';



@NgModule({
  declarations: [WebsocketsTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:3000',
      options: {}
    })
  ],
  providers: [
    WebSocketsService
  ],
  exports: [
    // WebsocketsService, 
    WebsocketsTestComponent
  ]
})
export class WebsocketsModule { }
