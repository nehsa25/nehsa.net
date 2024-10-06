import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../../shared-components/related-content/related-content.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-use-indeed',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommentComponent, MatExpansionModule, RouterLink, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './use-indeed.component.html',
  styleUrl: './use-indeed.component.scss'
})
export class UseIndeedComponent {
  constructor(public userService: UserService) {
    this.userService.page = "use-indeed";
   }

}
