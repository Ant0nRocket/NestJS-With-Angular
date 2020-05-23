import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { AuthComponent } from './main/auth/auth.component';

@NgModule({
	declarations: [
		// Shared
		HeaderComponent,
		FooterComponent,
		MainComponent,

		// Specific components
		AuthComponent,
		WelcomeComponent
	],
	exports: [ HeaderComponent, FooterComponent, MainComponent ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,

		FlexLayoutModule,

		// Material
		MatDividerModule,
		MatToolbarModule,
		MatSidenavModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule
	]
})
export class ComponentsModule {}
