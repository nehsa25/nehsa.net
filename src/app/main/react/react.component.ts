import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatIcon, MatButtonModule, CommentComponent, MatTableModule, RouterLink, RelatedContentComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {
  constructor(public userService: UserService) {
    this.userService.page = "react";
  }
}
