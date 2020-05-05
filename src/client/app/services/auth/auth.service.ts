import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

import { ServicesModule } from '../services.module';

import { AuthCredentialsDto } from '../../../../shared/auth/auth-credentials.dto';
import { apiConfig } from '../../../../shared/api.config';
import { AuthTokenDto } from '../../../../shared/auth/auth-token.dto';
import { IUserBase } from '../../../../shared/interfaces/user-base.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: ServicesModule
})
export class AuthService {

  public onAuthStateChanged$: Subject<boolean> = new Subject();
  public onAuthError$: Subject<string> = new Subject();

  public user: IUserBase = undefined;

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
      this.writeUserFromToken(authToken);
      localStorage.setItem('authToken', authToken);
      this.onAuthStateChanged$.next(true);
    } else { // failed log-in
      localStorage.removeItem('authToken');
      this.onAuthStateChanged$.next(false);
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  /** Decodes token (which is IUserBase from API) and writes in this.user */
  private writeUserFromToken(authToken: string) {
    const userFromToken: IUserBase = new JwtHelperService().decodeToken(authToken);
    const { _id, email, phone, username } = userFromToken;
    this.user = { _id, email, phone, username };
  }

  /**
   * Returns first of available IDs in this
   * order: username, email, phone.
   * If nothing available - null;
   */
  public getAvailableUserId(): string {
    if (!this.user) return null;
    if (this.user.username)
      return this.user.username;
    if (this.user.email)
      return this.user.email;
    if (this.user.phone)
      return this.user.phone;
    return null;
  }

  /** Sends auth credentials to server and subscribes to response */
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

  /** Same as signup, actually */
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

  /** Checks auth token valid */
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

  /** Sets auth token to null */
  public logout() {
    this.authToken = null;
    this.router.navigate(['']);
  }
}
