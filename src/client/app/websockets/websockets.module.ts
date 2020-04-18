import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WebsocketsTestComponent } from './websockets-test.component';
import { WebSocketsService } from './websockets.service';



@NgModule({
  declarations: [WebsocketsTestComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    WebSocketsService
  ],
  exports: [
    WebsocketsTestComponent
  ]
})
export class WebsocketsModule { }
