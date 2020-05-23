import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { SignupCredentials } from '../../../services/auth/signup-credentials';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
})
export class AuthComponent implements OnInit {
	// Work mode (log-in or sign-up)
	public mode = 'log-in';
	public isLoginMode = () => this.mode === 'log-in';
	public isSignupMode = () => !this.isLoginMode();
	public toggleMode = () => (this.mode = this.isLoginMode() ? 'sign-up' : 'log-in');

	// Model
	public dto: SignupCredentials = new SignupCredentials();

	constructor(private authService: AuthService) {}

	ngOnInit(): void {}

	public isReadyToSubmit() {
		if (this.isLoginMode()) {
			return !this.dto.isEmpty();
		} else {
			return !this.dto.isEmpty() && this.dto.isPasswordsEqual();
		}
	}

	public submit() {
		if (this.isLoginMode()) {
			this.authService.login(this.dto);
		} else {
			this.authService.signUp(this.dto);
		}
	}
}
