import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupCredentials } from '../../../services/auth/signup-credentials';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
})
export class AuthComponent implements OnInit, OnDestroy {
	// Work mode (log-in or sign-up)
	public mode = 'log-in';
	public isLoginMode = () => this.mode === 'log-in';
	public isSignupMode = () => !this.isLoginMode();
	public toggleMode = () => (this.mode = this.isLoginMode() ? 'sign-up' : 'log-in');

	// Model
	public dto: SignupCredentials = new SignupCredentials();

	// Auth subscribtions
	private authStateChanged$: Subscription;
	private authErrors$: Subscription;

	// Auth errors
	public authErrors: string[] = [];
	public isAuthErrors = () => this.authErrors.length > 0;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.authStateChanged$ = this.authService.onAuthStateChanged$.subscribe((state) => {
			if (state) this.router.navigate([ '' ]);
		});
		this.authErrors$ = this.authService.onAuthError$.subscribe((err) => {
			this.authErrors.push(err);
		});
	}

	ngOnDestroy(): void {
		this.authErrors$.unsubscribe();
		this.authStateChanged$.unsubscribe();
	}

	public isReadyToSubmit() {
		if (this.isLoginMode()) {
			return !this.dto.isEmpty();
		} else {
			return !this.dto.isEmpty() && this.dto.isPasswordsEqual();
		}
	}

	public submit() {
		this.authErrors = [];
		if (this.isLoginMode()) {
			this.authService.login(this.dto);
		} else {
			this.authService.signUp(this.dto);
		}
	}
}
