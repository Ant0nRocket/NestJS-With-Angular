import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from '../../services/components/sidebar-toggle.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
	@ViewChild('sidebar') sidebar: MatSidenav;

	constructor(private sidebarService: SidebarService) {}

	ngOnInit(): void {
		this.sidebarService.toggleSidebar.subscribe(() => this.sidebar.toggle());
	}
}
