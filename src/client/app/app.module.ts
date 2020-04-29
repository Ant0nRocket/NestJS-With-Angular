import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebsocketsTestComponent } from './components/websockets-test/websockets-test.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    WebsocketsTestComponent,
    AuthTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServicesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
