import { Component, OnInit, Input } from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public pageTitle;
  authenticationSubscription: Subscription;
  isAuthenticated: boolean;

  constructor(private auth: AuthorizationService, private router:  Router, activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.authenticationSubscription = this.auth.username$.subscribe( (username) => {
      this.isAuthenticated = !!username;
  }
}
