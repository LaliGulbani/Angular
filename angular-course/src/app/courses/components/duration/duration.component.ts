
import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const DURATION_DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DurationComponent),
  multi: true
};

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  providers: [DURATION_DATE_VALUE_ACCESSOR]
})
export class DurationComponent implements OnInit {
  @Output() changeDuration = new EventEmitter<number>();
  duration: number;

  @ViewChild('input')
  input: ElementRef;

  value: string;

  onChange = (v: string) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2) {}

  writeValue(value: any): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](this.input.nativeElement, 'disabled');
  }

  change($event: any) {
    this.onChange($event.target.value);
    this.onTouched();
  }
  
  onDurationChange() {
    this.changeDuration.emit(this.duration);
  }

}
