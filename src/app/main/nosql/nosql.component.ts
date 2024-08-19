import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-nosql',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule],
  templateUrl: './nosql.component.html',
  styleUrl: './nosql.component.scss'
})
export class NosqlComponent {
  constructor(public userService: UserService) {}

}