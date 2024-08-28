import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, MatButtonModule],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.scss'
})
export class CloudComponent {
  constructor(public userService: UserService) {}
}
