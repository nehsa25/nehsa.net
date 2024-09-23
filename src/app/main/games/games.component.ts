import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, CommentComponent, RelatedContentComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'games';
  }
}
