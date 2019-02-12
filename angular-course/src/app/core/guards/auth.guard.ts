import { Injectable } from '@angular/core';
import {Router, CanLoad, CanActivate} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(public auth: AuthorizationService, public router: Router) {
  }

  can(): Observable<boolean> {
    return new Observable((observer) => {
      const isAuthenticated = this.auth.isAuthenticated();
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
      observer.next(isAuthenticated);
    });
  }

  canActivate(): Observable<boolean> {
    return this.can();
  }

  canLoad(): Observable<boolean> {
    return this.can();
  }


}
