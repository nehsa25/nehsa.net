import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { FlashcardsComponent } from '../../../shared-components/flashcards/flashcards.component';
import { FlashcardsService } from '../../../services/flashcards.service';
import { Question } from '../../../types/question.type';

@Component({
  selector: 'app-ph207',
  standalone: true,
  imports: [MatCardModule, CommentComponent, FlashcardsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ph207.component.html',
  styleUrl: './ph207.component.scss',
  providers: [FlashcardsService]
})
export class Ph207Component {
  constructor(public flashcardsService: FlashcardsService) {
   }
}
