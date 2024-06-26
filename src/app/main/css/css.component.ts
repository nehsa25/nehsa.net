import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-css',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIcon],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {
  private _page_name = "css";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
