import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-gimp',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatExpansionModule, RouterLink, MatButtonModule, CommentComponent, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gimp.component.html',
  styleUrl: './gimp.component.scss'
})
export class GimpComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'gimp';
  }
}
