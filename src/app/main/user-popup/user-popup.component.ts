import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Inject, NgModule, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NameAboutType } from '../../types/nameabout.type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-user-popup',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon
  ],
  templateUrl: './user-popup.component.html',
  styleUrl: './user-popup.component.scss'
})
export class UserPopupComponent {
  formGroup1 = this._formBuilder.group({
    name: new FormControl(),
  });
  formGroup2 = this._formBuilder.group({
    //Ctrl2: ['', Validators.required],
  });
  formGroup3 = this._formBuilder.group({
    //Ctrl3: ['', Validators.required],
  });
  formGroup4 = this._formBuilder.group({
    //Ctrl4: ['', Validators.required],
  });
  formGroup5 = this._formBuilder.group({
    //Ctrl5: ['', Validators.required],
  });

  isLinear = true;
  showRozPhoto = false;
  showYourGood = false;
  saveName = false;
  chooseNameValue = false;
  showName2 = false;
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
        names: Array<NameAboutType>
      }) {
    this.name = this.data.names[0].Name;
    this.about = this.data.names[0].About;

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

  close() {
    this.closeDialog();
  }

  chooseName(choose: boolean) {
    if (choose) {
      this.chooseNameValue = false;
    } else {
      this.chooseNameValue = true;
    }
  }

  nameAccepted(choosen: boolean, stepper: MatStepper) {
    if (choosen) {
      this.saveName = true;
      let nameform: any | null = this.formGroup1.get('name');
      if (nameform.value != null) {
        this.name = nameform.value
        this.about = "";
        stepper.next();
      }
      this.nameLabel = this.name;
      this.emitService.next(true);  
    } else {
      if (this.name === this.data.names[0].Name) {
        this.name = this.data.names[1].Name;
        this.about = this.data.names[1].About;
      } else {
        this.name = this.data.names[0].Name;
        this.about = this.data.names[0].About;
      }
    }
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
