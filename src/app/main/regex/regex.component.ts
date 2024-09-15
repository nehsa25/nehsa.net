import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-regex',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RelatedContentComponent],
  templateUrl: './regex.component.html',
  styleUrl: './regex.component.scss'
})
export class RegexComponent {
  constructor(public userService: UserService) { this.userService.page = "regex"; }

}
