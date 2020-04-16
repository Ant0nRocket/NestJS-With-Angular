import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketsTestComponent } from './websockets-test.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [WebsocketsTestComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [WebsocketsTestComponent]
})
export class WebsocketsModule { }
