import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteCourse.emit(this.course.id);
  }

}
