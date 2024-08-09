import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-linux',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  templateUrl: './linux.component.html',
  styleUrl: './linux.component.scss'
})
export class LinuxComponent {
  constructor(public userService: UserService) { }

}
