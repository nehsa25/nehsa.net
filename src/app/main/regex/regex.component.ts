import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-regex',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  templateUrl: './regex.component.html',
  styleUrl: './regex.component.scss'
})
export class RegexComponent {

}
