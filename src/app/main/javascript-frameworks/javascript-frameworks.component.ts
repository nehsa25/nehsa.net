import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-javascript-frameworks',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatCommonModule, CommentComponent, RouterLink, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './javascript-frameworks.component.html',
  styleUrl: './javascript-frameworks.component.scss'
})
export class JavascriptFrameworksComponent {
  constructor(public userService: UserService) {
    userService.page = 'webdev-frameworks';
  }
}
