import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-c-sharp',
  standalone: true,
  imports: [MatCardModule, MatIcon, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './c-sharp.component.html',
  styleUrl: './c-sharp.component.scss'
})
export class CSharpComponent {

}
