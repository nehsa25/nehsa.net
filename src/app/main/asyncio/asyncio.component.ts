import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-asyncio',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './asyncio.component.html',
  styleUrl: './asyncio.component.scss'
})
export class AsyncioComponent {
  private _page_name = "asyncio";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
