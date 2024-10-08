import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-gemini',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, MatExpansionModule, RouterLink, RelatedContentComponent],
  templateUrl: './gemini.component.html',
  styleUrl: './gemini.component.scss'
})
export class GeminiComponent {
  constructor(public userService: UserService) { this.userService.page = "gemini"; }
}
