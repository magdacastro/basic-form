import { FooterModule } from './../shared/footer/footer.module';
import { HeaderModule } from './../shared/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';


@NgModule({
  declarations: [
    HomeComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularToastifyModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [ToastService]

})
export class HomeModule { }
