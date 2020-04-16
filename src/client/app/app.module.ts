import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebsocketsModule } from './websockets/websockets.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WebsocketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
