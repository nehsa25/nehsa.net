import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { UserService } from '../../services/user.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, CommentComponent, RelatedContentComponent, MatButtonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'entity';
  }
}
