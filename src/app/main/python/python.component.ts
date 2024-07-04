import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, MatButtonModule, NgIf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './python.component.html',
  styleUrl: './python.component.scss'
})
export class PythonComponent {
  private _page_name = "python";
  totalItems = 0;
  private _answers: string[] = ["Fucking Jerry."]
  public displayAnswerOne = "";

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.page = this._page_name;
  }

  answer(entry: number) {
    this.displayAnswerOne = this._answers[entry];
  }
}
