import { Injectable } from '@angular/core';
import { RegistrationFormComponent } from '../home/registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  constructor() { }

  receivePhone(value: string): string {
    let removeCaracters = value.replace(/\D/g, '');

    if (removeCaracters.length === 2) {
      return removeCaracters.replace(/^(\d{2}).*/, '($1)');
    }

    if (removeCaracters.length > 2 && removeCaracters.length < 7) {
      return removeCaracters.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
    }

    if (removeCaracters.length >= 7) {
      return removeCaracters.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    }

    return removeCaracters;
  }

  maskTel(_this: RegistrationFormComponent) {
    const telForm = _this.dataForm.controls['tel'];
    const maskTel: string = this.receivePhone(telForm.value);

    telForm.setValue(maskTel);
  }


  receiveUser(value: string): string {
    const regex = /[^A-Za-zãõâôáéó\s\t]/g;
    let removeNumbers = value.replace(regex, '');
    return removeNumbers;
  }


  maskName(_this: RegistrationFormComponent){
    const nameForm = _this.dataForm.controls['user'];
    const maskName: string = this.receiveUser(nameForm.value);
    nameForm.setValue(maskName);
  }

}
