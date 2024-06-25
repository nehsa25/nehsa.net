import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';

@Component({
  selector: 'app-inno',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, MatExpansionModule],
  providers: [UserService],
  templateUrl: './inno.component.html',
  styleUrl: './inno.component.scss'
})
export class InnoComponent {
  page_name = "inno";
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
