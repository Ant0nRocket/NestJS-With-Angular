import { Routes } from '@angular/router';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WebsocketsTestComponent } from './components/websockets-test/websockets-test.component';

export const ROUTES: Routes = [
    { path: 'auth/:mode', component: AuthTestComponent },
    { path: 'ws', component: WebsocketsTestComponent },
    { path: '**', component: WelcomeComponent }
];