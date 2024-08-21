import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-javascript-frameworks',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatCommonModule, CommentComponent, RouterLink],
  templateUrl: './javascript-frameworks.component.html',
  styleUrl: './javascript-frameworks.component.scss'
})
export class JavascriptFrameworksComponent {
  constructor(public userService: UserService) {
    userService.page = 'javascript-frameworks';
  }
}
