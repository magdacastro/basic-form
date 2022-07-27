import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CustomValidatorsService {

  constructor() { }

  static Mustmatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['Mustmatch']) {
        return;
      }
      if (!matchingControl.value) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        return matchingControl.setErrors({ Mustmatch: true });
      } else {
        return matchingControl.setErrors(null);
      }
    };
  }
}
