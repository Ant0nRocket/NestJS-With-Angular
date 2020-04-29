import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-test',
  templateUrl: './auth-test.component.html',
  styleUrls: ['./auth-test.component.scss']
})
export class AuthTestComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  alert(m: any) {
    window.alert(m);
  }

}
