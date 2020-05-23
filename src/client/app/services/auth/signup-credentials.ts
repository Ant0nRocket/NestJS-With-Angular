import { AuthCredentialsDto } from '../../../../shared/auth/auth-credentials.dto';

export class SignupCredentials extends AuthCredentialsDto {
	password2: string = '';

	constructor() {
		super();
		this.password = '';
		this.password2 = '';
	}

	isPasswordsEqual(): boolean {
		if (!this.password || !this.password2) return false;
		return this.password === this.password2;
	}

	isEmpty(): boolean {
		if (!this.id || !this.password) return true;
		return this.id.trim().length === 0 || this.password.length === 0;
	}
}
