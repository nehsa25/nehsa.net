import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-graphql',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatExpansionModule, CommentComponent, RelatedContentComponent],
  templateUrl: './graphql.component.html',
  styleUrl: './graphql.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GraphqlComponent {
  constructor(public userService: UserService) { this.userService.page = 'graphql'; }

}
