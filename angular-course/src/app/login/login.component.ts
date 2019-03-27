import {AuthorizationService} from '../core/services/authorization.service';
import {Router} from '@angular/router';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../core/entities/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  @Output() login = new EventEmitter<{ [key: string]: string }>();

  user: FormGroup;

  constructor(public auth: AuthorizationService, public router: Router) { }

  ngOnInit() {
    this.user = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public onLogin(): void {
    this.login.emit({ login: value.login, password: value.password });
  }
}
