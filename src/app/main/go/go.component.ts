import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-go',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatIcon],
  templateUrl: './go.component.html',
  styleUrl: './go.component.scss'
})
export class GoComponent {
  constructor(public userService: UserService) { }

}
