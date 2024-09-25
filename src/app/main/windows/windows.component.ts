import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    CommentComponent,
    RelatedContentComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './windows.component.html',
  styleUrl: './windows.component.scss',
})
export class WindowsComponent {
  constructor(public userService: UserService) {}
}
