import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Output() changeDate = new EventEmitter<string>();
  date: string;

  constructor() { }

  ngOnInit() {
  }

  onDateChange() {
    this.changeDate.emit(this.date);
  }
}
