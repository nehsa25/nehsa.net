import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { CommentType } from '../../../types/comment.type';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  private _page_name = "writing";
  totalItems = 0;

  constructor(
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }

  startFlash($event: any) {
    this.snackBar.open("Coming soon (move from PH207)!", 'Dismiss', { duration: 5000 });
    $event.stopPropagation();
  }
}
