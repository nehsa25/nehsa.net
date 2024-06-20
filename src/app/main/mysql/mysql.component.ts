import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mysql',
  standalone: true,
  imports: [CommentComponent, MatCardModule],
  templateUrl: './mysql.component.html',
  styleUrl: './mysql.component.scss'
})
export class MysqlComponent {

}
