import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-linux',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './linux.component.html',
  styleUrl: './linux.component.scss'
})
export class LinuxComponent {
  constructor(public userService: UserService) { this.userService.page = "linux"; }

}
