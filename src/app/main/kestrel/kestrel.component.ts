import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kestrel',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, RouterLink, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './kestrel.component.html',
  styleUrl: './kestrel.component.scss'
})
export class KestrelComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'Kestrel';
  }

}
