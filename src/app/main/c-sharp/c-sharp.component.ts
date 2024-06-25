import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-c-sharp',
  standalone: true,
  imports: [MatCardModule, MatIcon, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './c-sharp.component.html',
  styleUrl: './c-sharp.component.scss'
})
export class CSharpComponent {
  page_name = "c-sharp";
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
