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
    if (this._authToken) { // success login
      localStorage.setItem('authToken', authToken);
      this.serviceBus.onAuthSuccess.emit();
    } else { // failed log-in
      localStorage.removeItem('authToken');
      this.serviceBus.onAuthFailed.emit();
    }
  }

  constructor(
    private serviceBus: ServiceBus,
    private http: HttpClient
  ) {
    console.log('Auth service created');

    this.checkToken({ token: this.authToken }); // starts check request. On OK magic appears :)

    serviceBus.onIncomingWebSocketMessage.subscribe((dto: WebSocketsDto) => {
      if (dto.theme === WebSocketsTheme.ClientConnected) {
        dto.theme = WebSocketsTheme.AuthenticateWithToken;
        dto.content = this.authToken;
        this.serviceBus.onOutgoingWebSocketMessage.emit(dto);
      }
    });
  }

  signUp(authCredentials: AuthCredentialsDto) {
    this.http.post<AuthTokenDto>(apiConfig.urlSignup, authCredentials).subscribe(
      // remember that authToken setter will call appropriate subject on bus
      (dto) => {
        this.authToken = dto.token;
      },
      (err) => {
        this.authToken = null;
        if (err.error.statusCode === 409) // User exists
          this.serviceBus.onSignUpError.emit('User already exists.');
        if (err.error.statucCode === 400) // Bad request
          this.serviceBus.onSignUpError.emit('Some error occured. Check input.');
        if (err.error.statucCode === 500) // server error
          this.serviceBus.onSignUpError.emit('Some server side error. Try later.');
      }
    );
  }

  login(authCredentials: AuthCredentialsDto) {
    this.http.post<AuthTokenDto>(apiConfig.urlLogin, authCredentials).subscribe(
      (dto) => {
        this.authToken = dto.token;
      },
      () => {
        this.authToken = null;
      }
    );
  }

  checkToken(authTokenDto: AuthTokenDto) {
    this.http.post(apiConfig.urlTokenCheck, authTokenDto).subscribe(
      (dto: AuthTokenDto) => {
        this.authToken = dto.token;
      },
      () => {
        this.authToken = null;
      }
    );
  }

  logout() {
    this.authToken = null;
  }
}
