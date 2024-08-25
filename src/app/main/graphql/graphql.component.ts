import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-graphql',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatExpansionModule, CommentComponent],
  templateUrl: './graphql.component.html',
  styleUrl: './graphql.component.scss'
})
export class GraphqlComponent {
  constructor(public userService: UserService) { this.userService.page = 'GraphQL'; }

}
