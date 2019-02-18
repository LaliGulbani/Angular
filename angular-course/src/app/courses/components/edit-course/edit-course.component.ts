import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {Course} from '../../entities/course';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: Course = new Course();
  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(): void {
    const id = '' + this.route.snapshot.paramMap.get('id');
    this.coursesService.getCourseById(id).subscribe((course: Course) => {
      this.course = course;
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public save(): void {
    this.coursesService.editCourse(this.course.id, this.course).subscribe(() => {
      this.router.navigate(['courses']);
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

  public onDurationChange(duration): void {
    this.course.length = duration;
  }

  public onDateChange(date): void {
    this.course.date = date;
  }
}
