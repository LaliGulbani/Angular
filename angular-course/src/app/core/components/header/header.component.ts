import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.username = this.authorizationService.getUserLogin();
  }

  logout(): void {
    this.authorizationService.logout();
    this.username = null;
  }
}
