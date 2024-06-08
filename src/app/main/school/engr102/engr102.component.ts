import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';

@Component({
  selector: 'app-engr102',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './engr102.component.html',
  styleUrl: './engr102.component.scss'
})
export class Engr102Component {

}
