import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [MatCardModule, CommentComponent, NgIf, MatButtonModule, AsyncPipe, RouterLink, MatExpansionModule, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})

export class AwsComponent {
  private _page_name = "aws";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
