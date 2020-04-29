import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SignupCredentials } from './signup-credentials';
import { Subscription, SubscriptionLike } from 'rxjs';
import { ServiceBus } from '../../services/service-bus.service';

@Component({
  selector: 'app-auth-test',
  templateUrl: './auth-test.component.html',
  styleUrls: ['./auth-test.component.scss']
})
export class AuthTestComponent implements OnInit, OnDestroy {

  /** 
   * User input will be placed here. onChangeUserId()
   * will parse whether it's a email, phone or login
   * and fill apropriate field of credentials
   */
  userId = '';

  /** Will "fly" on server when submit */
  credentials: SignupCredentials = new SignupCredentials();

  /** Signup/login errors goes here */
  errors: string[] = [];

  /** For template simplicity (*ngIf become shorter) */
  get hasErrors(): boolean {
    return this.errors.length > 0;
  }

  /** Current mode: sign up or log in */
  mode = 'sign up';

  userIdTypeText = 'User ID (name, email or phone)';

  signUpError$: Subscription;
  authFailed$: Subscription;

  constructor(
    public authService: AuthService,
    private serviceBus: ServiceBus,
  ) { }

  ngOnInit(): void {
    this.signUpError$ = this.serviceBus.onSignUpError.subscribe(
      (error: string) => { this.errors.push(error) }
    );
  }

  ngOnDestroy(): void {
    this.signUpError$.unsubscribe();
  }

  alert(m: any) {
    window.alert(m);
  }

  onUserIdKeyPressed(event: Event) {
    this.userId = (event.target as HTMLInputElement).value;
    if (this.userId.trim().length === 0) {
      // supress empty or space-filled values
      (event.target as HTMLInputElement).value = '';
    }
    this.credentials.username = this.userId;
    //TODO: determine id type: email, phone, name?
  }

  /** Fills this.errors array if any errors */
  checkModelErrors() {
    this.errors = [];

    if (this.credentials.isEmpty()) return;

    if (this.userId.length === 0)
      this.errors.push('User ID must be something non-blank.');

    if (this.credentials.password.length === 0)
      this.errors.push('Password must exist.');

    if (this.mode === 'sign up' && !this.credentials.isPasswordsEqual())
      this.errors.push('Passwords must be the same.');

  }

  submit() {
    this.checkModelErrors();

    if (this.hasErrors) return;

    this.authFailed$ = this.serviceBus.onAuthFailed.subscribe(
      () => {
        this.errors.push('Wrong user id or password');
        this.authFailed$.unsubscribe();
      }
    );

    if (this.mode === 'sign up')
      this.authService.signUp(this.credentials);

    if (this.mode === 'log in')
      this.authService.login(this.credentials);
  }

  logout() {
    this.authService.logout();
    this.credentials = new SignupCredentials();
    this.errors = [];
  }
}
