import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string;
  usernameSubscription: Subscription;

  constructor(private auth: AuthorizationService) { }

  ngOnInit() {
    this.usernameSubscription = this.auth.getLoggedInName.subscribe((username: string) => {
      this.username = username;
      });
  this.auth.getUserLogin();
  }

  logout(): void {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
  }
}
