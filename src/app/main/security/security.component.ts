import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, MatButtonModule, RelatedContentComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityComponent {
  constructor(public userService: UserService) { this.userService.page = "security"; }

}
