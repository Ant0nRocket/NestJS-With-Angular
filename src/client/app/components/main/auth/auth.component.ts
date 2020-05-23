import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
})
export class AuthComponent implements OnInit {
	public mode = 'log-in';

	public isLoginMode = () => this.mode === 'log-in';
	public isSignupMode = () => !this.isLoginMode();
	public toggleMode = () => (this.mode = this.isLoginMode() ? 'sign-up' : 'log-in');

	constructor() {}

	ngOnInit(): void {}
}
