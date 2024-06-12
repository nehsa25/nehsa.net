import { Component } from '@angular/core';
import { FlashcardsService } from '../../services/flashcards.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { Question } from '../../types/question.type';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
  providers: [FlashcardsService],
})
export class FlashcardsComponent {
  launchCardsBtn: boolean = false;
  ShowAnswer: boolean = false;
  constructor(public flashcardsService: FlashcardsService) {
  }
  ngOnInit() {
    let questions = [
      new Question("What is the capital of France?", "Paris")      
    ];
    this.setQuestions(questions);
  }

  setQuestions(questions: Question[]) {
    this.flashcardsService.setQuestions(questions);
  }

  launchCards() {
    this.launchCardsBtn = true;
  }

  showAnswer() {
    this.ShowAnswer = true;
  }

  showNext() {
    this.ShowAnswer = false;
    return this.flashcardsService.setQuestion();
  }
}
