import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authorizationService.isAuthenticated;
  }
}
