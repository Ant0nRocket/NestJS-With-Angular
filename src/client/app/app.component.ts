import { Component } from '@angular/core';
import { ServicesBootstrap } from './services/services.bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private servicesBootstrap: ServicesBootstrap
  ) {

  }
}
