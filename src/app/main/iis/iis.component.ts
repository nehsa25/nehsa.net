import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-iis',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, CommentComponent, RouterLink, RelatedContentComponent],
  templateUrl: './iis.component.html',
  styleUrl: './iis.component.scss'
})
export class IisComponent {
  private _page_name = "iis";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
