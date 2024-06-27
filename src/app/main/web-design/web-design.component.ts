import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatCardImage, MatIcon],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {

}
