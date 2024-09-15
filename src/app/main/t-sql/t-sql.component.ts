import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-t-sql',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, MatIconModule, CommentComponent, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './t-sql.component.html',
  styleUrl: './t-sql.component.scss'
})
export class TSqlComponent {
  constructor(public userService: UserService) {
    this.userService.page = 't-sql';
  }
}
