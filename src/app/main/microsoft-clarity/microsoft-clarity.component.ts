import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-microsoft-clarity',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule, CommentComponent, RouterLink, MatButtonModule, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './microsoft-clarity.component.html',
  styleUrl: './microsoft-clarity.component.scss'
})
export class MicrosoftClarityComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'clarity';
   }
}
