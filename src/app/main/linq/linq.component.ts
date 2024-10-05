import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-linq',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, RelatedContentComponent, MatButtonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './linq.component.html',
  styleUrl: './linq.component.scss'
})
export class LinqComponent {
  constructor(public userService: UserService) {
    this.userService.page = "linq";
  }
}
