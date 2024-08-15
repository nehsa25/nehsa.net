import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserService } from '../../services/user.service';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CopyComponent } from '../../shared-components/copy/copy.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatIcon, RouterLink, CopyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {
  private _page_name = "angular";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.page = this._page_name;
  }
}
