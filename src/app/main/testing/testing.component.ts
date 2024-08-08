import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatButtonModule, RouterLink, MatExpansionModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  constructor(public userService: UserService) { }

}
