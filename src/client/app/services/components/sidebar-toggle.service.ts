import { Injectable, EventEmitter } from '@angular/core';
import { ServicesModule } from '../services.module';

@Injectable({
	providedIn: ServicesModule
})
export class SidebarService {
	public toggleSidebar: EventEmitter<void> = new EventEmitter();
}
