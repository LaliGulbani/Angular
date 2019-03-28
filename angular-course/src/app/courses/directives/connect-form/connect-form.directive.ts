import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Course } from '../../../../core/models';

@Directive({
  selector: '[ampConnectForm]'
})
export class ConnectFormDirective {
  @Input('ampConnectForm')
  set data(data: { course: Course }) {
    if (data.course) {
      this.formGroupDirective.form.patchValue(data.course);
      this.formGroupDirective.form.markAsPristine();
    }
  }

  constructor(private formGroupDirective: FormGroupDirective) {}
}