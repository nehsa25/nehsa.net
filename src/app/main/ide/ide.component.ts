import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.scss'
})
export class IdeComponent {

}
