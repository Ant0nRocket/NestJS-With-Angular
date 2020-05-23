import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './components/main/auth/auth.component';
import { WelcomeComponent } from './components/main/welcome/welcome.component';

export const ROUTES: Routes = [
	// default page - welcome
	{ path: '', component: WelcomeComponent },

	// sign-up and login
	{ path: 'auth', component: AuthComponent }
];
