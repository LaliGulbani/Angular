import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public searchQuery = '';
  constructor() { }

  ngOnInit() {
  }

  search(): void {
    console.log(this.searchQuery);
  }

  loadMore(): void {
    console.log('Loaded more courses');
  }
  
}
