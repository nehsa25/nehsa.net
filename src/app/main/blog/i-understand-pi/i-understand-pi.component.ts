import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-i-understand-pi',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent],
  templateUrl: './i-understand-pi.component.html',
  styleUrl: './i-understand-pi.component.scss'
})
export class IUnderstandPiComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'Blog - i-understand-pi';
    
  }

}
