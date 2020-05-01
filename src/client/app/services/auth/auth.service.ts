import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { ServicesModule } from '../services.module';

import { AuthCredentialsDto } from '../../../../shared/auth/auth-credentials.dto';
import { apiConfig } from '../../../../shared/api.config';
import { AuthTokenDto } from '../../../../shared/auth/auth-token.dto';

@Injectable({
  providedIn: ServicesModule
})
export class AuthService {

  public onAuthStateChanged$: Subject<boolean> = new Subject();
  public onAuthError$: Subject<string> = new Subject();

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
      this.onAuthStateChanged$.next(true);
    } else { // failed log-in
      localStorage.removeItem('authToken');
      this.onAuthStateChanged$.next(false);
    }
  }

  constructor(private http: HttpClient) { }

  public signUp(authCredentials: AuthCredentialsDto) {
    this.http.post<AuthTokenDto>(apiConfig.urlSignup, authCredentials).subscribe(
      // remember that authToken setter will call appropriate subject
      (dto) => {
        this.authToken = dto.token;
      },
      (err) => {
        this.authToken = null;
        if (err.error.statusCode === 409) // User exists
          this.onAuthError$.next('User already exists.');
        if (err.error.statucCode === 400) // Bad request
          this.onAuthError$.next('Some error occured. Check input.');
        if (err.error.statucCode === 500) // server error
          this.onAuthError$.next('Some server side error. Try later.');
      }
    );
  }

  public login(authCredentials: AuthCredentialsDto) {
    this.http.post<AuthTokenDto>(apiConfig.urlLogin, authCredentials).subscribe(
      (dto) => {
        this.authToken = dto.token;
      },
      (err) => {
        if (err.error.statucCode !== 504) {
          this.authToken = null;
          this.onAuthError$.next('Invalid login or password.');
        } else {
          this.onAuthError$.next("Server isn't responding. Try later.");
        }
      }
    );
  }

  public checkToken(authTokenDto?: AuthTokenDto) {
    if (!authTokenDto)
      authTokenDto = { token: this.authToken };

    this.http.post(apiConfig.urlTokenCheck, authTokenDto).subscribe(
      (dto: AuthTokenDto) => {
        this.authToken = dto.token;
      },
      (err) => {
        if (err.error.statucCode < 500) {
          this.authToken = null;
        }
      }
    );
  }

  public logout() {
    this.authToken = null;
  }
}
