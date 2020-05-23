import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [ HeaderComponent, FooterComponent, MainComponent ],
	exports: [ HeaderComponent, FooterComponent, MainComponent ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		// Material
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatButtonModule
	]
})
export class ComponentsModule {}
