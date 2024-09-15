import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { CommentType } from '../../../types/comment.type';
import { RelatedContentComponent } from '../../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-engr102',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './engr102.component.html',
  styleUrl: './engr102.component.scss'
})
export class Engr102Component {
  private _page_name = "engr102";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
