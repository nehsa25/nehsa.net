import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AiComponent {
  constructor(public userService: UserService) {
    this.userService.page = "ai";
  }
}
