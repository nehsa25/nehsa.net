import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { CommentType } from '../../../types/comment.type';

@Component({
  selector: 'app-engr102',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './engr102.component.html',
  styleUrl: './engr102.component.scss'
})
export class Engr102Component {
  page_name = "engr102";
  totalItems = 0;

  constructor(
    private _userService: UserService
  ) {}

  eventsSubject: Subject<CommentType> = new Subject<CommentType>();

  ngOnInit() { }

  sendPageInfoToChild() {
    let comment = new CommentType();
    comment.username = this._userService.name;
    comment.page = this.page_name;
    this.eventsSubject.next(comment);
  }
}
