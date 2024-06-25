import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [MatCardModule, CommentComponent, NgIf, MatButtonModule],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})

export class AwsComponent {
  page_name = "AWS";
  totalItems = 0;

  constructor(
    private _userService: UserService
  ) {}

  eventsSubject: Subject<CommentType> = new Subject<CommentType>();

  ngOnInit() { 
    this.sendPageInfoToChild();
  }

  sendPageInfoToChild() {
    let comment = new CommentType();
    comment.username = this._userService.name;
    comment.page = this.page_name;
    this.eventsSubject.next(comment);
  }
}
