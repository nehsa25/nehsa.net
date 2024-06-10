import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NameAboutType } from '../../types/nameabout.type';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms';
import { NgIf } from '@angular/common';
import e from 'express';

@Component({
  selector: 'app-user-popup',
  standalone: true,
  imports: [MatButtonModule, MatStepperModule, NgIf, FormsModule, MatFormFieldModule, ReactiveFormsModule ],
  templateUrl: './user-popup.component.html',
  styleUrl: './user-popup.component.scss'
})
export class UserPopupComponent {
  FormGroup1 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  FormGroup2 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  FormGroup3 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  isLinear = false;
  showRozPhoto = false;
  showYourGood = false;
  saveName = false;
  name = "";
  about = "";
  greeting = "Hi";
  nameLabel = "Name";
  moodLabel = "Mood";
  @Output() emitService = new EventEmitter();
  constructor(
    private _formBuilder: FormBuilder,
    public userDialog: MatDialogRef<UserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:
      {
        namePerson: NameAboutType
      }) {
    this.name = data.namePerson.Name;
    this.about = data.namePerson.About;
    
    var now = new Date();
    if (now.getHours() < 8) {
      this.greeting = "Guten Morgen";
    } else if (now.getHours() >= 8 && now.getHours() < 15) { 
      this.greeting = "Buenas tardes";
    }
    else if (now.getHours() >= 15) { 
      this.greeting = "Bonsoir";
    }
  }

  // if name is changed, emit the new name
  //

  close () {
    this.closeDialog();
  }

  yes() {
    this.saveName = true;
    this.nameLabel = this.name;
    this.emitService.next(true);    
  }

  no() {
    this.saveName = false;
  }

  showRoz(mood: number) {
    if (mood <= 3) {
      this.moodLabel = "Sad";
    } else if (mood < 8 && mood > 3) {
      this.moodLabel = "Average";
    } else { 
      this.moodLabel = "Happy";
    }
    if (this.showRozPhoto) {
      this.showRozPhoto = false;
    } else {
      this.showRozPhoto = true;
    }
  }

  yourGood(mood: any) {
    if (mood <= 3) {
      this.moodLabel = "Sad";
    } else if (mood < 8 && mood > 3) {
      this.moodLabel = "Average";
    } else { 
      this.moodLabel = "Happy";
    }
    if (this.showYourGood) {
      this.showYourGood = false;
    } else {
      this.showYourGood = true;
    }
  }

  closeDialog() {
    this.userDialog.close('Closing!');
  }
}
