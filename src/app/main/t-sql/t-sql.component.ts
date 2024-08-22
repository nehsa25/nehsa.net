import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-t-sql',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent, MatIcon, RouterLink, MatButtonModule],
  templateUrl: './t-sql.component.html',
  styleUrl: './t-sql.component.scss'
})
export class TSqlComponent {
  constructor(public userService: UserService) {
    this.userService.page = "t-sql";
  }
}
