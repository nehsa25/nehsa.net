import { Injectable } from '@angular/core';
import { Question } from '../types/question.type';

@Injectable()
export class FlashcardsService {
    Questions: Question[] = [];
    QuestionAnswer: any = null;
    constructor() { }
    public setQuestion() {
        this.QuestionAnswer = this.Questions[Math.floor(Math.random() * this.Questions.length)];
        return this.QuestionAnswer;
    }
    public setQuestions(questions: Question[]) {
        this.Questions = questions;
    }
}