import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BASE_URL} from "../../app.config";
import {Router} from "@angular/router";
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {}

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public login(login: string, password: string): void {
    this.http.post(`${BASE_URL}/auth/login`, {login: login, password: password}, {}).subscribe((token: JSON) => {
        this.setToken(token);
        this.getLoggedInName.emit(this.getUserLogin());
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.getLoggedInName.emit('');
    this.router.navigate(['login']);
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: JSON): void {
    localStorage.setItem('token', token['token']);
    this.router.navigate(['']);
  }

  public getUserLogin(): void {
    this.http.post(`${BASE_URL}/auth/userinfo`, {}).subscribe((user: User) => {
      this.getLoggedInName.emit(`${user.name.first} ${user.name.last}`);
      },
      (error: HttpErrorResponse) => {
      console.log(error.message);
      });
  }
}
