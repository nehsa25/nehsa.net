import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { FlashcardsComponent } from '../../../shared-components/flashcards/flashcards.component';
import { FlashcardsService } from '../../../services/flashcards.service';
import { Question } from '../../../types/question.type';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { CommentType } from '../../../types/comment.type';
import { RelatedContentComponent } from '../../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-ph207',
  standalone: true,
  imports: [MatCardModule, CommentComponent, FlashcardsComponent, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ph207.component.html',
  styleUrl: './ph207.component.scss',
  providers: [FlashcardsService]
})
export class Ph207Component {
  private _page_name = "ph207";
  totalItems = 0;
  eventsSubject: Subject<CommentType> = new Subject<CommentType>();
  constructor(
    public userService: UserService,
    public flashcardsService: FlashcardsService) {
   }
   
   ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
