import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [CommentComponent, MatExpansionModule, MatCardModule, MatIconModule, MatButtonModule, NgIf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './python.component.html',
  styleUrl: './python.component.scss'
})
export class PythonComponent {
  private _page_name = "python";
  totalItems = 0;
  public answerOne = "";
  public answerTwo = "";

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.page = this._page_name;
  }

  clickAnswerOne() {
    let answer = "Fucking Jerry."
    this.answerOne == "" ? this.answerOne = answer : this.answerOne = "";
  }

  clickAnswerTwo() {
    let answer = "The print statement would only show the Guard initialization: I'm being constructed baby!"
    this.answerTwo == "" ? this.answerTwo = answer : this.answerTwo = "";
  }
}
