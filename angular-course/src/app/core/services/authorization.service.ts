import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public user: User;
  public isAuthenticated: boolean;
  private users: User[];

  constructor() {
    this.users = [
      {
        login: 'laligulbani',
        password: '2019'
      },
      {
        login: 'lalala',
        password: '2018'
      },
      {
        login: 'kuga',
        password: 'mobileiron'
      }
    ];
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.isAuthenticated = true;
      this.user = JSON.parse(userInfo);
    } else {
      this.isAuthenticated = false;
      this.user = null;
    }
  }

  public login(user: User): void {
    if (this.users.find(mockedUser => {
      return (mockedUser.login === user.login && mockedUser.password === user.password)
    })) {
      this.user = user;
      this.isAuthenticated = true;
      localStorage.setItem('userInfo', JSON.stringify(this.user));
      location.reload();
    } else {
      alert('Wrong login or password');
    }
  }

  public logout(): void {
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem('userInfo');
    location.reload();
  }

  public getUserLogin(): string {
    if (this.user) {
      return this.user.login;
    } else {
      return null;
    }
  }
}
