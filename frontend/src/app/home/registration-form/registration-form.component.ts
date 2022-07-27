import { HttpResponse } from '@angular/common/http';
import { SendEmailService } from './../../services/send-email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationForm } from './registration-form';
import { CustomValidatorsService } from 'src/app/services/custom-validators.service';
import { MaskService } from 'src/app/services/mask.service';
import { ToastService } from 'angular-toastify';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  dataForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sendEmailService: SendEmailService,
    public maskService: MaskService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group(
      {
        user: ['', [Validators.required, Validators.minLength(6)]],
        tel: ['', [Validators.required, Validators.minLength(11)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: CustomValidatorsService.Mustmatch(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      return;
    }

    const formData = this.dataForm.getRawValue() as RegistrationForm;

    this.sendEmailService.dispatchEmail(formData).subscribe({
      next: () => {
        this._toastService.info('Email enviado com sucesso');

        this.dataForm.reset();
      },
      error: (error) => {
        this._toastService.info(`Não foi possível enviar o formulário: Descrição: ${error.message}.`);
      },
    });
  }
}

