import { Component, forwardRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe } from '@angular/common';

export const RELEASE_DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateComponent),
  multi: true
};

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [RELEASE_DATE_VALUE_ACCESSOR]
})
export class DateComponent implements ControlValueAccessor {
  @ViewChild('input')
  input: ElementRef;

  value: string;

  onChange = (v: string) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2, private datePipe: DatePipe) {}

  writeValue(value: any): void {
    const transformed = this.datePipe.transform(value, 'mediumDate');
    this.renderer.setProperty(this.input.nativeElement, 'value', transformed);
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
}