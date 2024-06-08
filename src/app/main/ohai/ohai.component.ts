import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-ohai',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ohai.component.html',
  styleUrl: './ohai.component.scss'
})
export class OhaiComponent {

}
