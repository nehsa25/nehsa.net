import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../../shared-components/related-content/related-content.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-valheim',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, CommentComponent, RelatedContentComponent, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './valheim.component.html',
  styleUrl: './valheim.component.scss'
})
export class ValheimComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'valheim';
  }
}
