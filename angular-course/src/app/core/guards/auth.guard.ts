import { Injectable } from '@angular/core';
import {Router, CanLoad, CanActivate} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs/index';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthorizationService, public router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable((observer) => {
      const isAuthenticated = this.auth.isAuthenticated();
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
      observer.next(isAuthenticated);
    });
  }
}
