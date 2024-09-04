import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-ssr',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ssr.component.html',
  styleUrl: './ssr.component.scss'
})
export class SsrComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'ssr';
  }
}
