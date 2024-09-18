import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-choco',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RouterLink, MatButtonModule, RelatedContentComponent, MatExpansionModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './choco.component.html',
  styleUrl: './choco.component.scss'
})
export class ChocoComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'choco';
  }
}
