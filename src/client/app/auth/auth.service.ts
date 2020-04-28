import { Injectable } from '@angular/core';
import { WebSocketsService } from '../websockets/websockets.service';
import { Observable } from 'rxjs';
import { WebSocketsDto } from '../../../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../../../shared/websockets/websockets-theme.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: string = 'SomeTestToken#(*&(*#$%(*^$*&^#';
  private obs: Observable<WebSocketsDto>;

  constructor(
    private webSocketsService: WebSocketsService
  ) {
    console.log('Auth service created');
    this.obs = webSocketsService.getSubject();
    this.obs.subscribe((dto) => {
      if (dto.theme === WebSocketsTheme.ClientConnected) {
        dto.theme = WebSocketsTheme.AuthenticateWithToken;
        dto.content = this.authToken;
        webSocketsService.send(dto);
      }
    });
  }
}
