import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {

}
