import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { isEmail, isMobilePhone } from 'class-validator';

import { SignupCredentials } from '../../services/auth/signup-credentials';
import { AuthService } from '../../services/auth/auth.service';

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

  /** Auth service events subscriptions */
  authErrorSub: Subscription;
  authStateSub: Subscription;

  /** Modal window for errors */
  errorsModal: M.Modal;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showModal(modal: M.Modal) {
    if (!modal)
      modal = M.Modal.init(document.getElementById('auth_errors'));

    if (!modal.isOpen)
      modal.open();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.errors = [];
      this.mode = (params.mode as string).replace('-', ' ');
    });

    // subscribe on auth fails to fill errors list
    this.authErrorSub = this.authService.onAuthError$.subscribe(
      (err: string) => {
        this.errors.push(err);
        this.showModal(this.errorsModal);
      }
    );

    this.authStateSub = this.authService.onAuthStateChanged$.subscribe(
      (state: boolean) => {
        if (state) this.router.navigate(['ws']);
      }
    );
  }

  ngOnDestroy(): void {
    this.authErrorSub.unsubscribe();
    this.authStateSub.unsubscribe();
  }

  onUserIdKeyPressed(event: Event) {
    this.userId = (event.target as HTMLInputElement).value;
    // supress empty or space-filled values
    if (this.userId.trim().length === 0) {
      (event.target as HTMLInputElement).value = '';
    }

    // reset all id fields to empty string
    this.credentials.email =
      this.credentials.phone =
      this.credentials.username = undefined;

    if (isEmail(this.userId)) {
      this.credentials.email = this.userId;
    } else if (isMobilePhone(this.userId)) {
      this.credentials.phone = this.userId;
    } else {
      this.credentials.username = this.userId;
    }
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
    if (this.hasErrors) {
      this.showModal(this.errorsModal);
    } else {
      if (this.mode === 'sign up')
        this.authService.signUp(this.credentials);

      if (this.mode === 'log in')
        this.authService.login(this.credentials);
    }
  }

  logout() {
    this.authService.logout();
    this.credentials = new SignupCredentials();
    this.errors = [];
  }
}
