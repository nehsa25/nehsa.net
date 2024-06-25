import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';

@Component({
  selector: 'app-mysql',
  standalone: true,
  imports: [CommentComponent, MatCardModule],
  providers: [UserService],
  templateUrl: './mysql.component.html',
  styleUrl: './mysql.component.scss'
})
export class MysqlComponent {
  page_name = "mysql";
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
