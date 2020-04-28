import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebSocketsService } from '../websockets/websockets.service';
import { Observable } from 'rxjs';
import { WebSocketsDto } from '../../../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../../../shared/websockets/websockets-theme.enum';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string = 'SomeTestToken#(*&(*#$%(*^$*&^#';
  private obs: Observable<WebSocketsDto>;

  constructor(
    private webSocketsService: WebSocketsService,
    private http: HttpClient
  ) {
    console.log('Auth service created');

    if (!environment.production) { // put your DEBUG token here if there is no signup/login
      this.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTcxNWI4YmIzMDQxMTUzODNmM2U0MSIsImlhdCI6MTU4ODA3NTQ2NywiZXhwIjoxNTg4NjgwMjY3fQ.j0Bea_kXy7lPi1yXlXDYHmoxrQdjiY8QtzDnJh4lkwQ';
    } else {
      this.authToken = localStorage.getItem('authToken');
    }

    if (this.authToken) {
      webSocketsService.connect();
    }

    this.obs = webSocketsService.getSubject();
    this.obs.subscribe((dto) => {
      if (dto.theme === WebSocketsTheme.ClientConnected) {
        dto.theme = WebSocketsTheme.AuthenticateWithToken;
        dto.content = this.authToken;
        webSocketsService.send(dto);
      }
    });
  }

  private onWebSocketDtoReceived(dto: WebSocketsDto) {
    if (dto.theme === WebSocketsTheme.ClientConnected) {
      dto.theme = WebSocketsTheme.AuthenticateWithToken;
      dto.content = this.authToken;
      console.log(this);
      this.webSocketsService.send(dto);
    }
  }
}
