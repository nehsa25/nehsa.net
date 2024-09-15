import { Component } from '@angular/core';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../../services/user.service';
import { RelatedContentComponent } from '../../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-vscode-bad-ux',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent, RelatedContentComponent],
  templateUrl: './vscode-bad-ux.component.html',
  styleUrl: './vscode-bad-ux.component.scss'
})
export class VscodeBadUxComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'Blog - VSCode Bad UX';
  }

}
