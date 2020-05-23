import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SidebarService } from '../../services/components/sidebar-toggle.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	constructor(public authService: AuthService, public sidebarService: SidebarService) {}

	ngOnInit(): void {}
}
