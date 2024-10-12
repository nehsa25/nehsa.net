import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RelatedContentComponent } from '../../../shared-components/related-content/related-content.component';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { UserService } from '../../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vuex',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RelatedContentComponent, CommentComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './vuex.component.html',
  styleUrl: './vuex.component.scss'
})
export class VuexComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'vuex';
  }
}
