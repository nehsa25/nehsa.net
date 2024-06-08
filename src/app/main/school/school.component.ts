import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {

}
