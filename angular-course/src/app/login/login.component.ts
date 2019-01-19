import {Component, Input, OnInit} from '@angular/core';
import {AuthorizationService} from '../core/services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  constructor(private authorizationService: AuthorizationService, private router: Router) {
    if (this.authorizationService.isAuthenticated) {
      this.router.navigate(['./']);
    }
  }

  ngOnInit() {
  }

  login() {
    this.authorizationService.login({
      login: this.username,
      password: this.password
    });
  }

}
