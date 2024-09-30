import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-llama',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, CommentComponent, RelatedContentComponent, MatButtonModule, MatIconModule],
  templateUrl: './llama.component.html',
  styleUrl: './llama.component.scss'
})
export class LlamaComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'llama';
  }

}
