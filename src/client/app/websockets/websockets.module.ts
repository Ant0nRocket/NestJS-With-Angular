import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSocketsService } from './websockets.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    WebSocketsService
  ],
  exports: []
})
export class WebsocketsModule { }
