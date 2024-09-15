import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-jsdoc',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './jsdoc.component.html',
  styleUrl: './jsdoc.component.scss'
})
export class JsdocComponent {
  private _page_name = "jsdoc";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
