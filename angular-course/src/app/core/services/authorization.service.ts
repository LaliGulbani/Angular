import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BASE_URL} from '../../app.config';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs/index';
import {User} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  usernameSubject: Subject<string> = new Subject();
  username$: Observable<string> = this.usernameSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public login(login: string, password: string): void {
    this.http.post(`${BASE_URL}/auth/login`, {login: login, password: password}, {}).subscribe((token: JSON) => {
        this.setToken(token);
        this.getUserLogin();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }

  public logout(): void {

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.getUserLogin();
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: JSON): void {
    localStorage.setItem('token', token['token']);
    this.router.navigate(['']);
  }

  public getUserLogin(): void {
    this.http.post<User>(`${BASE_URL}/auth/userinfo`, {}).subscribe((res: User) =>  {
        this.usernameSubject.next(res.name.first);
      },
        (err) => {
        console.log(err.message);
        this.usernameSubject.next(null);
      });
  }
}
