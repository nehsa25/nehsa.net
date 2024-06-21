import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})

export class AwsComponent {
  constructor(private _userService: UserService) {}
  eventsSubject: Subject<CommentType> = new Subject<CommentType>();

  sendPageInfoToChild() {
    let comment = new CommentType();
    comment.username = this._userService.name;
    comment.page = "AWS";
    this.eventsSubject.next(comment);
  }
}
