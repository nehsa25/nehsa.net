import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NameAboutType } from '../../types/nameabout.type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';

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
    MatIcon,
    MatSnackBarModule
  ],
  providers: [UserService],
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

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  isLinear = true;
  showRozPhoto = false;
  showYourGood = false;
  isNameAccepted = false;
  isNameConfirmed = false;
  isForceName = false;
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
    private _snackbar: MatSnackBar,
    public userService: UserService,
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

  forceChooseName() {
    this.isForceName = true;
  }

  nameAccepted(choosen: boolean, stepper: MatStepper) {
    if (choosen) {
      this.isNameAccepted = true;
      let nameform: any | null = this.formGroup1.get('name');
      if (nameform.value != null) {
        this.name = nameform.value
        this.about = "";
      }
      this.nameLabel = this.name;
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

  nameConfirmed(choosen: boolean, stepper: MatStepper) {
    if (choosen) {
      this.isNameConfirmed = true;
      const nameupdate: NameAboutType = {
        Name: this.name,
        About: this.about
      };
      this.emitService.next(nameupdate);
    } else {
      this.isNameConfirmed = false;
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
    this.showRozPhoto = true;
    this.moodLabel = mood.toString();
    if (mood >= 7) {
      this.showYourGood = true;
    }
    if (mood === 10) {
      this._snackbar.open("Sublime!  I'm glad to hear it!", undefined, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000
      });
    }
  }

  closeDialog() {
    this.userDialog.close('Closing!');
  }
}