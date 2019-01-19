import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../course';
import {CoursesService} from '../services/courses.service';
import {FilterPipe} from '../pipes/filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() searchQuery: string;
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(private coursesService: CoursesService, private filterPipe: FilterPipe) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.filteredCourses = this.courses;
  }

  search(): void {
    this.filteredCourses = this.filterPipe.transform(this.courses, this.searchQuery);
  }

  deleteCourse(id): void {
    this.coursesService.removeCourse(id);
    this.courses = this.courses.filter(course => {
      return course.id !== id;
    });
    this.search();
  }

  addCourse(course): void {
    this.coursesService.addCourse(course);
    this.courses.push(course);
    this.search();
  }

  loadMore(): void {
    console.log('Loaded more courses');
  }
}
