import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-semantic-ui',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatCardImage, MatIcon, MatButton, RouterLink, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './semantic-ui.component.html',
  styleUrl: './semantic-ui.component.scss'
})
export class SemanticUiComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'semanticui';
   }

}
