import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-redux',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent, RelatedContentComponent],
  templateUrl: './redux.component.html',
  styleUrl: './redux.component.scss'
})
export class ReduxComponent {
  private _page_name = "redux";
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.page = this._page_name;
  }

}
