import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-playwright',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './playwright.component.html',
  styleUrl: './playwright.component.scss'
})
export class PlaywrightComponent {

}
