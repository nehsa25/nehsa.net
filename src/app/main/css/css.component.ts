import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-css',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {

}
