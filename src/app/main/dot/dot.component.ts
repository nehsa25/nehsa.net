import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-dot',
    standalone: true,
    templateUrl: './dot.component.html',
    styleUrl: './dot.component.scss',
    imports: [MatCardModule, CommentComponent],
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
