import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  @Output() changeDuration = new EventEmitter<number>();
  duration: number;

  constructor() { }

  ngOnInit() {
  }

  onDurationChange() {
    this.changeDuration.emit(this.duration);
  }

}
