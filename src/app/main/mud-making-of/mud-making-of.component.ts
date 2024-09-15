import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-mud-making-of',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, MatIcon, RelatedContentComponent],
  templateUrl: './mud-making-of.component.html',
  styleUrl: './mud-making-of.component.scss'
})
export class MudMakingOfComponent {
  constructor(public userService: UserService) { this.userService.page = "mud-making-of"; }
}
