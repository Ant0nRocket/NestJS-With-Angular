import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebsocketsModule } from './websockets/websockets.module';

import { AppComponent } from './app.component';
import { WebsocketsTestComponent } from './components/websockets-test/websockets-test.component';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { HttpClientModule } from '@angular/common/http';

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
    AuthModule,
    WebsocketsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
