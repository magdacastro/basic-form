import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { RegistrationForm } from '../home/registration-form/registration-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  protected BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  dispatchEmail(registrationForm: RegistrationForm): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/contact`, registrationForm);
  }
}
