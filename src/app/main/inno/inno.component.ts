import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-inno',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, MatExpansionModule],
  templateUrl: './inno.component.html',
  styleUrl: './inno.component.scss'
})
export class InnoComponent {

}
