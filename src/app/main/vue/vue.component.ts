import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vue',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule, CommentComponent, RouterLink],
  templateUrl: './vue.component.html',
  styleUrl: './vue.component.scss'
})
export class VueComponent {
  constructor(public userService: UserService) {
    userService.page = 'vue';
  }
}
