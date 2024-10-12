import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-vue',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule, CommentComponent, RouterLink, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './vue.component.html',
  styleUrl: './vue.component.scss'
})
export class VueComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'vue';
  }
}
