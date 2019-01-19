import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../entities/course';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();
  modalOpened: boolean;

  constructor() { }

  ngOnInit() { }

  delete(): void {
    this.deleteCourse.emit(this.course.id);
  }

  openModal(): void {
    this.modalOpened = true;
    console.log(this.modalOpened);
  }

  closeModal(): void {
    this.modalOpened = false;
  }
}
