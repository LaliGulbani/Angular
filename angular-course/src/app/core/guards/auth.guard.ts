import { Injectable } from '@angular/core';
import {Router, CanLoad, CanActivate} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(public auth: AuthorizationService, public router: Router) {}

  can(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canActivate(): boolean {
    return this.can();
  }

  canLoad(): boolean {
    return this.can();
  }
}