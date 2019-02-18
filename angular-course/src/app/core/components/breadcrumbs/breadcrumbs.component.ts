import { Component, OnInit, Input } from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public pageTitle;
  isAuthenticated: boolean;

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    // this.isAuthenticated = this.authorizationService.isAuthenticated;
  }
}
