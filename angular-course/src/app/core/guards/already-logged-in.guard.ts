import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {AuthorizationService} from "../services/authorization.service";
import {Observable} from 'rxjs';

@Injectable()
export class AlreadyLoggedInGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthorizationService, private router: Router) {}

  can(): Observable<boolean> {
    return new Observable((observer) => {
      const isAuthenticated = this.auth.isAuthenticated();
      if (isAuthenticated) {
        this.router.navigate(['/courses']);
      }
      observer.next(!isAuthenticated);
    });
  }
  canActivate(): Observable<boolean> {
    return this.can();
  }


  canLoad(): Observable<boolean>{
    return this.can();
  }
}
