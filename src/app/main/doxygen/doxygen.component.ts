import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-doxygen',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule, CommentComponent, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './doxygen.component.html',
  styleUrl: './doxygen.component.scss'
})
export class DoxygenComponent {
  private _page_name = "doxy";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
