import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthorizationService} from '../core/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  constructor(public auth: AuthorizationService) { }

  ngOnInit() {
  }

  public login(): void {
    this.auth.login(this.username, this.password);
  }

}
