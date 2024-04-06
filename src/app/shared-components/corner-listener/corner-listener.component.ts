import {CommonModule} from '@angular/common';  
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { SnackService } from '../../services/snack.service';

@Component({
  selector: 'app-corner-listener',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule],
  providers: [
    SnackService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  templateUrl: './corner-listener.component.html',
  styleUrl: './corner-listener.component.scss'
})
export class CornerListenerComponent {
  contactme_opened:boolean = false;
  contactme_submit_clicked = false;
  emailbody:string = "";
  emailsubject:string = "";
  constructor(public snackMsg: SnackService) {}

  public contactme() {
    console.log("contactme clicked");
    this.contactme_opened = true;
  }

  public contactme_submit() {
    console.log("contactme_submit clicked");
    this.contactme_submit_clicked = true;
    this.snackMsg.openSnackBar("My apologies, this is not actually implemented.  It's used for testing only.  Please use email above to contact me!", 50000);
  }
}
