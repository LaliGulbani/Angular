
import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  const date = new Date(control.value);

  if (isNaN(date.getTime())) {
    return { invalidDate: true };
  }

  return null;
}