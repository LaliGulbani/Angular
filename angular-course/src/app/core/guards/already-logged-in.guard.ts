import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {AuthorizationService} from "../services/authorization.service";

@Injectable()
export class AlreadyLoggedInGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthorizationService, private router: Router) {}

  can(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['courses']);
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