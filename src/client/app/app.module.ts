import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebsocketsModule } from './websockets/websockets.module';

import { AppComponent } from './app.component';
import { WebsocketsTestComponent } from './components/websockets-test/websockets-test.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsocketsTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebsocketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
