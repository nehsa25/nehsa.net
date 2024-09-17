import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { CopyComponent } from '../../shared-components/copy/copy.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-kubernetes',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, CopyComponent, RelatedContentComponent],
  templateUrl: './kubernetes.component.html',
  styleUrl: './kubernetes.component.scss'
})
export class KubernetesComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'k8s';
   }
}
