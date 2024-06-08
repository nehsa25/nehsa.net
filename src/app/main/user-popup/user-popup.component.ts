import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NamePersonType } from '../../types/namepersone.type';

@Component({
  selector: 'app-user-popup',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './user-popup.component.html',
  styleUrl: './user-popup.component.scss'
})
export class UserPopupComponent {
  name = "";
  about = "";
  greeting = "Hi";
  @Output() emitService = new EventEmitter();
  constructor(
    public userDialog: MatDialogRef<UserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:
      {
        namePerson: NamePersonType
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

  yes() {
    this.emitService.next(true);
    this.closeDialog();
  }

  no() {
    this.emitService.next(false);
    this.closeDialog();
  }

  closeDialog() {
    this.userDialog.close('Closing!');
  }

}
