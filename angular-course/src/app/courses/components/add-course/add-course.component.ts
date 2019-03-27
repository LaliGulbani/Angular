import {Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {HttpErrorResponse} from '@angular/common/http';
import { ValidateDate } from '../../validators/data.validator';
import { ValidateInteger } from '../../validators/is.integer.validator';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl('', [Validators.required, ValidateDate]),
    durationMin: new FormControl('', [Validators.required, ValidateInteger])
  });
  authors: Array<object>;

  constructor(private router: Router, private coursesService: CoursesService) { }
  
  titleControl = this.course.get('title');
  descriptionControl = this.course.get('description');
  createdAtControl = this.course.get('createdAt');
  durationControl = this.course.get('durationMin');

  public save({ value, valid }: { value: Course; valid: boolean }): void {
    const course = {
      name: this.course.title,
      description: this.course.description,
      date: new Date(this.course.date),
      length: this.course.duration,
      isTopRated: false
    };

    this.coursesService.addCourse(course).subscribe(() => {
      this.router.navigate(['courses']);
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

  public cancel(): void {
    this.router.navigate(['courses']);
  }
}
