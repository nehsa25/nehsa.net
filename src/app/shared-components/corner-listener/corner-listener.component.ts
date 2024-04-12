import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SnackService } from '../../services/snack.service';
import { ContactForm } from '../../types/contactform';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-corner-listener',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule],
  providers: [
    SnackService,
    HttpService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  templateUrl: './corner-listener.component.html',
  styleUrl: './corner-listener.component.scss'
})
export class CornerListenerComponent {
  contactme_opened: boolean = false;
  contactme_submit_clicked = false;
  emailbody: string = "";
  emailsubject: string = "";
  constructor(
    public snackMsg: SnackService,
    public httpClient: HttpService) { }

  public contactme() {
    this.contactme_opened = true;
  }

  /** This async function submits contect me form to server API */
  public async contactme_submit() {
    this.contactme_submit_clicked = true;
    let form = new ContactForm()
    form.subject = this.emailbody;
    form.body = this.emailsubject;
    let response = this.httpClient.postContactMe(form).subscribe(data => {
      this.snackMsg.openSnackBar("Request was submitted but.. I won't see it.  Sorry.  Pleease email instead.  :)", 5000);
    });
    return response;
  }
}
