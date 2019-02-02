
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../../entities/course';
import {CoursesService} from '../../services/courses.service';
import {Subscription} from 'rxjs/index';
import {HttpErrorResponse, HttpParams} from "@angular/common/http";
import {COURSES_PER_LOAD} from "../../../app.config";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() searchQuery: string;
  courses: Course[];
  coursesSubscription: Subscription;
  coursesPerLoad = COURSES_PER_LOAD;
  loadStart: number;
  noMoreCourses: boolean;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.loadStart = 0;
    this.courses = [];
    this.noMoreCourses = false;
    this.loadMore();
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
    let params: HttpParams = new HttpParams();
    if (this.searchQuery) {
      params = params.set('textFragment', this.searchQuery);
    }
    params = params.set('start', `${this.loadStart}`);
    params = params.set('count', `${this.coursesPerLoad}`);
    this.coursesSubscription = this.coursesService.getCourses(params).subscribe((courses: Course[]) => {
      if (!courses.length && !this.courses.length || courses.length < this.coursesPerLoad && this.loadStart) {
        this.noMoreCourses = true;
      } else {
        this.courses = [...this.courses, ...courses.map(course => {
          course.date = new Date(course.date);
          return course;
        })];
        this.loadStart += this.coursesPerLoad;
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }
}
