import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pageTitle = ''

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pageTitle = this.route.snapshot.data['title'];
  }
}
