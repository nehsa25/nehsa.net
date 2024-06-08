import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';

@Component({
  selector: 'app-ph207',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ph207.component.html',
  styleUrl: './ph207.component.scss'
})
export class Ph207Component {

}
