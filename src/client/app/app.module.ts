import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		// Angular modules
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		HttpClientModule,
		BrowserAnimationsModule,

		FlexLayoutModule,

		// User modules
		ComponentsModule,
		ServicesModule
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
