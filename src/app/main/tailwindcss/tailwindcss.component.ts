import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tailwindcss',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent, MatTableModule],
  templateUrl: './tailwindcss.component.html',
  styleUrl: './tailwindcss.component.scss'
})
export class TailwindcssComponent {
  constructor(public userService: UserService) {}

}
