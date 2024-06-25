import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-dot',
    standalone: true,
    templateUrl: './dot.component.html',
    styleUrl: './dot.component.scss',
    imports: [MatCardModule, CommentComponent],
    providers: [UserService]
})
export class DotComponent {
    page_name = "dot";
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
