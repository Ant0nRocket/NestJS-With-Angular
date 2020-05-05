import { Component } from '@angular/core';
import { ServiceBus } from './services/service-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public servicesBus: ServiceBus) { }
}
