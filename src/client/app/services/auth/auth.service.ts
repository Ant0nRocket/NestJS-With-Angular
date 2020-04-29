import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebSocketsDto } from '../../../../shared/websockets/websockets.dto';
import { WebSocketsTheme } from '../../../../shared/websockets/websockets-theme.enum';
import { environment } from '../../../environments/environment';
import { AuthCredentialsDto } from '../../../../shared/auth/auth-credentials.dto';
import { apiConfig } from '../../../../shared/api.config';
import { AuthTokenDto } from '../../../../shared/auth/auth-token.dto';
import { ServiceBus } from '../service-bus.service';
import { ServicesModule } from '../services.module';

@Injectable({
  providedIn: ServicesModule
})
export class AuthService {

  private _authToken: string = null;

  get authToken(): string {
    if (!this._authToken) { // no token in memory, try read LS
      const tempAuthToken = localStorage.getItem('authToken');
      if (tempAuthToken) {
        this._authToken = tempAuthToken;
      }
    }
    return this._authToken;
  }

  set authToken(authToken: string) {
    this._authToken = authToken;
    localStorage.setItem('authToken', authToken);
    if (this._authToken) { // success login
      this.serviceBus.onAuthSuccess.emit();
    } else { // failed log-in
      this.serviceBus.onAuthFailed.emit();
    }
  }

  constructor(
    private serviceBus: ServiceBus,
    private http: HttpClient
  ) {
    console.log('Auth service created');
    if (!environment.production) { // put your DEBUG token here if there is no signup/login
      this.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTcxNWI4YmIzMDQxMTUzODNmM2U0MSIsImlhdCI6MTU4ODA3NTQ2NywiZXhwIjoxNTg4NjgwMjY3fQ.j0Bea_kXy7lPi1yXlXDYHmoxrQdjiY8QtzDnJh4lkwQ';
    }

    serviceBus.onIncomingWebSocketMessage.subscribe((dto: WebSocketsDto) => {
      if (dto.theme === WebSocketsTheme.ClientConnected) {
        dto.theme = WebSocketsTheme.AuthenticateWithToken;
        dto.content = this._authToken;
        this.serviceBus.onOutgoingWebSocketMessage.emit(dto);
      }
    });
  }

  signUp(authCredentials: AuthCredentialsDto) {
    this.http.post<AuthTokenDto>(apiConfig.urlSignup, authCredentials).subscribe(
      (ok) => {
        this.authToken = ok.token;
      },
      (err) => {
        this.authToken = null;
      }
    );

  }
}
