import { NgIf } from '@angular/common';
import { Component, Inject, Input, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { CommentType } from '../../types/comment.type';
import { HttpService } from '../../services/http.service';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatSnackBarModule
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  commentform = this._formBuilder.group({
    comment: new FormControl(),
  });
  username = "";
  page = "";
  addComment = false;
  commenttext = "";
  private eventsSubscription: Subscription = new Subscription();
  @Input() events: Observable<CommentType> = new Observable<CommentType>();
  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpService,
    private _snackbar: MatSnackBar,
    private _userService: UserService) { }

  ngOnInit(){
    this.eventsSubscription = this.events.subscribe((y) => {
      this.page = y.page;
      this.username = y.username;
    });
  }
  
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  addcomment() {
    this.addComment = true;
  }

  submit() {
    const user_comment = this.commentform.value.comment;
    if (user_comment == null || user_comment === "") {
      this._snackbar.open("Please enter a comment.", "Dismiss", { duration: 2000 });
      return;
    }

    this._snackbar.open("Thank you for your comment!", "Dismiss", { duration: 2000 });
    this.commenttext = "";
    let comment = new CommentType();
    comment.comment = user_comment;
    comment.page = this.page;
    comment.username = this.username;
    this._httpClient.postComment(comment).subscribe((_next: any) => {
      console.log(_next);
      this._snackbar.open("Comment added", "Dismiss");
    });
  }

  cancel() {
    this.commentform.value.comment = "";
    this.addComment = false;
  }
}
