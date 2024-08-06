import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-mud-making-of',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  templateUrl: './mud-making-of.component.html',
  styleUrl: './mud-making-of.component.scss'
})
export class MudMakingOfComponent {
  constructor(public userService: UserService) { }
}
