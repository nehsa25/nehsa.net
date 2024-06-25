import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';

@Component({
    selector: 'app-ai-image-generation',
    standalone: true,
    templateUrl: './ai-image-generation.component.html',
    styleUrl: './ai-image-generation.component.scss',
    imports: [MatCardModule, CommentComponent],
    providers: [UserService]
})
export class AiImageGenerationComponent {
    page_name = "ai-generation";
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
