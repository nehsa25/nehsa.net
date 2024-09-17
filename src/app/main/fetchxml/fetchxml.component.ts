import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-fetchxml',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, RelatedContentComponent, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './fetchxml.component.html',
  styleUrl: './fetchxml.component.scss'
})
export class FetchxmlComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'dynamics365';
  }
}
