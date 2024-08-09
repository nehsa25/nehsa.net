import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-well-life',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatButtonModule, RouterLink, MatExpansionModule],
  templateUrl: './well-life.component.html',
  styleUrl: './well-life.component.scss'
})
export class WellLifeComponent {
  constructor(public userService: UserService) { }
}
