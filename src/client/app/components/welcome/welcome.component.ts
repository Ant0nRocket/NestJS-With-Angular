import { Component, OnInit } from '@angular/core';
import { ServiceBus } from '../../services/service-bus.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public serviceBus: ServiceBus) { }

  ngOnInit(): void {
  }

}
