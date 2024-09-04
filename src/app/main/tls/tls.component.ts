import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-tls',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tls.component.html',
  styleUrl: './tls.component.scss'
})
export class TlsComponent {
  private _page_name = "tls";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
