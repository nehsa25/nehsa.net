import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-agile',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, MatButtonModule, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './agile.component.html',
  styleUrl: './agile.component.scss'
})
export class AgileComponent {
  private _page_name = "agile";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }

}
