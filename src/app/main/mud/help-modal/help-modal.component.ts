import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { CommonModule, NgFor } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelpEvent } from '../../../types/mudevent.type';

@Component({
  selector: 'app-help-modal',
  standalone: true,
  imports: [CommonModule, NgFor, MatCardModule, CommentComponent],
  templateUrl: './help-modal.component.html',
  styleUrl: './help-modal.component.scss'
})
export class HelpModalComponent {
  @Inject(MAT_DIALOG_DATA) public data?:
  {
    cmds: HelpEvent;
  };

  ngOnInit() {
    console.log(this.data);
  }
}
