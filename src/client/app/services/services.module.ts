import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { WebSocketsService } from './websockets/websockets.service';


@NgModule({
    declarations: [],
    providers: [
        AuthService,
        WebSocketsService,
    ],
    imports: [
        CommonModule,
    ],
})
export class ServicesModule { }
