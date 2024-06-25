import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { CommentType } from '../../../types/comment.type';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  private _page_name = "writing";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
