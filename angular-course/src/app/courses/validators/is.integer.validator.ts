
import { AbstractControl } from '@angular/forms';

export function ValidateInteger(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  if (parseFloat(control.value) === parseInt(control.value, 10) && !isNaN(control.value)) {
    return null;
  }

  return { notInteger: true };
}