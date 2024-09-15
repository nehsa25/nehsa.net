import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  templateUrl: './vue.component.html',
  styleUrl: './vue.component.scss'
})
export class VueComponent {
  constructor(public userService: UserService) {
    userService.page = 'vue';
  }
}
