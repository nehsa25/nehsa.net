import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-designpatterns',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './designpatterns.component.html',
  styleUrl: './designpatterns.component.scss'
})
export class DesignpatternsComponent {
  page_name = "design patterns";
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
