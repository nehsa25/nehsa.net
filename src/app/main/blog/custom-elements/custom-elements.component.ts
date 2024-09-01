import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-elements',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent, MatIconModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './custom-elements.component.html',
  styleUrl: './custom-elements.component.scss'
})
export class CustomElementsComponent {
  constructor(public userService: UserService) {
    this.userService.page = "Blog - custom elements";
   }

}
