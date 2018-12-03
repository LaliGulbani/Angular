import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../course';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() searchQuery: string;
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
  }



  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  deleteCourse(id): void {
    this.courses = this.courses.filter(course => {
      return course.id !== id;
    });
  }

}
