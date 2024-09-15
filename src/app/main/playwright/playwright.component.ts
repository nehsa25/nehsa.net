import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-playwright',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RouterLink, MatExpansionModule, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './playwright.component.html',
  styleUrl: './playwright.component.scss'
})
export class PlaywrightComponent {
  private _page_name = "playwright";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
