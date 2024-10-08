import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-discord',
  standalone: true,
  imports: [MatCardModule, MatCardModule, MatExpansionModule, CommentComponent, RelatedContentComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './discord.component.html',
  styleUrl: './discord.component.scss'
})
export class DiscordComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'discord';
  }
}
