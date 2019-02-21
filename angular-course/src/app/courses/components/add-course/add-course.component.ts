import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Course} from '../../entities/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  title: string;
  description: string;
  date: string;
  duration: number;
  authors: Array<object>;

  constructor(private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
  }

  public onDurationChange(duration): void {
    this.duration = duration;
  }

  public onDateChange(date): void {
    this.date = date;
  }

  public save(): void {
    const course = {
      name: this.title,
      description: this.description,
      date: new Date(this.date),
      length: this.duration,
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
