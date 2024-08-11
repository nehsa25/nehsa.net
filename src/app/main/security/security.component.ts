import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  constructor(public userService: UserService) { }

}