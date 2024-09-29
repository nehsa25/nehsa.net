import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-mariadb',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RelatedContentComponent, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './mariadb.component.html',
  styleUrl: './mariadb.component.scss'
})
export class MariadbComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'mariadb';
  }
}
