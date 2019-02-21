import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs/index';

@Injectable()
export class AlreadyLoggedInGuard implements CanActivate {
  constructor(private auth: AuthorizationService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable((observer) => {
      const isAuthenticated = this.auth.isAuthenticated();
      if (isAuthenticated) {
        this.router.navigate(['/courses']);
      }
      observer.next(!isAuthenticated);
    });
  }
}
