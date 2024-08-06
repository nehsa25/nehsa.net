import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-gemini',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, MatExpansionModule],
  templateUrl: './gemini.component.html',
  styleUrl: './gemini.component.scss'
})
export class GeminiComponent {
  constructor(public userService: UserService) { }
}
