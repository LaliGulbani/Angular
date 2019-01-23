import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  public onDurationChange(duration): void {
    this.duration = duration;
  }

  public save(): void {
    console.log(`Title: ${this.title}, description: ${this.description}, date: ${this.date}, duration: ${this.duration}.`);
  }

  public cancel(): void {
  }

}
