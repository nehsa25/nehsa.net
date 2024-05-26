import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpService } from '../../services/http.service';
import { AddUserForm } from '../../types/adduser.form';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, FormsModule, MatButtonModule, RecaptchaModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  captcha: string = "";
  userDetails: FormGroup;
  emailControl = new FormControl('');
  usernameControl = new FormControl('');
  passwordControl = new FormControl('');
  constructor(
    private fb: FormBuilder, 
    public httpClient: HttpService
) {
    this.userDetails = this.fb.group({
      email: this.emailControl,
      username: this.usernameControl,
      password: this.passwordControl
    });
    this.captcha = "";
  }

  ngOnInit() {
    this.emailControl.addValidators([Validators.required, Validators.email]);
    this.usernameControl.addValidators([Validators.required, Validators.minLength(4)]);
    this.passwordControl.addValidators([Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]);
  }

  resolved(captchaResponse: string | null) {
    if (captchaResponse != null) {
      this.captcha = captchaResponse;
    }
  }

  submitForm(): void {
    if (this.userDetails.invalid) return;

    let addUserForm = new AddUserForm();
    if (this.emailControl.value != null && this.usernameControl.value != null && this.passwordControl.value != null) {
      addUserForm.email = this.emailControl.value;
      addUserForm.username = this.usernameControl.value;
      addUserForm.password = this.passwordControl.value;
    }
    this.httpClient.postAddUser(addUserForm).subscribe(data => {
      console.log(data);
    });
  }
}
