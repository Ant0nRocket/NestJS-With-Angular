import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { WebsocketsTestComponent } from './components/websockets-test/websockets-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthTestComponent,
    WebsocketsTestComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // User modules
    ServicesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
