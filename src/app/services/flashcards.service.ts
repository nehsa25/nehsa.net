import { Injectable } from '@angular/core';
import { Question } from '../types/question.type';

@Injectable()
export class FlashcardsService {
    Questions: Question[] = [];
    QuestionAnswer: any = null;
    ViewedQuestions: Question[] = [];
    current = 1;

    constructor() { }
    public setQuestion() {

        this.QuestionAnswer = this.Questions[Math.floor(Math.random() * this.Questions.length)];
        while (this.ViewedQuestions.includes(this.QuestionAnswer)) {
            this.QuestionAnswer = this.Questions[Math.floor(Math.random() * this.Questions.length)];
        }
        this.ViewedQuestions.push(this.QuestionAnswer);
        this.current++;
        return this.QuestionAnswer;
    }
    public setQuestions(questions: Question[]) {
        this.Questions = questions;
    }
    public getTotal() {
        return this.Questions.length + 1;
    }
}