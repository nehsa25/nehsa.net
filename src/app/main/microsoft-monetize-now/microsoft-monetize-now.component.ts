import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-microsoft-monetize-now',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule, MatButtonModule, CommentComponent, RouterLink, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './microsoft-monetize-now.component.html',
  styleUrl: './microsoft-monetize-now.component.scss',
})
export class MicrosoftMonetizeNowComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'microsoft-monetize-now';
  }
}
