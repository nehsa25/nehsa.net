import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';  
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTooltipModule, MatIconModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {
  doghover:boolean = false;

  public hireme() {
    console.log("yay");
  }
  public sendmsg() {
    console.log("yay2");
  }

  public hover() {
    this.doghover = true;
    console.log("yuppers!");
  };
}
