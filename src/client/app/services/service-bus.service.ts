import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ServicesModule } from './services.module';
import { AuthService } from './auth/auth.service';
import { WebSocketsService } from './websockets/websockets.service';

import { WebSocketsDto } from '../../../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../../../shared/websockets/websockets-theme.enum';

@Injectable({
  providedIn: ServicesModule
})
export class ServiceBus {

  /////////////////////////////////////////////////////////////////////////////
  // WEBSOCKETS

  onIncomingWebSocketDto: Subject<WebSocketsDto> = new Subject();
  onIncomingServiceWebSocketDto: Subject<WebSocketsDto> = new Subject();

  constructor(
    public authService: AuthService,
    public webSocketsService: WebSocketsService,
  ) {
    this.activate();
  }

  activate() {

    this.authService.onAuthStateChanged$.subscribe(
      (authorized) => {
        if (authorized) {
          this.webSocketsService.connect();
        } else {
          this.webSocketsService.close();
        }
      }
    );

    this.webSocketsService.onMessageReceived$.subscribe(
      (dto: WebSocketsDto) => {
        if (dto.theme > WebSocketsTheme.EndOfServiceCommands) {
          this.onIncomingWebSocketDto.next(dto);
        } else {
          this.handleServiceWebSocketDto(dto);
          this.onIncomingServiceWebSocketDto.next(dto);
        }
      }
    );

    this.authService.checkToken(); // this will raise onAuthStateChanged$
  }

  private handleServiceWebSocketDto(dto: WebSocketsDto) {
    if (dto.theme === WebSocketsTheme.ClientConnected) {
      const responseDto = { ...dto };
      responseDto.theme = WebSocketsTheme.AuthenticateWithToken;
      responseDto.content = this.authService.authToken;
      this.webSocketsService.send(responseDto);
    }
  }
}
