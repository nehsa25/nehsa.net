import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
    selector: 'app-dot',
    standalone: true,
    templateUrl: './dot.component.html',
    styleUrl: './dot.component.scss',
    imports: [MatCardModule, CommentComponent, RelatedContentComponent],
})
export class DotComponent {
    private _page_name = "dot";
    totalItems = 0;
  
    constructor(
      public userService: UserService
    ) {}

    ngOnInit() { 
      this.userService.page = this._page_name;
    }
}
