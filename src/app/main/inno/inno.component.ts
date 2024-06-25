import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';

@Component({
  selector: 'app-inno',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatIconModule, MatExpansionModule],
  providers: [UserService],
  templateUrl: './inno.component.html',
  styleUrl: './inno.component.scss'
})
export class InnoComponent {
  private _page_name = "inno";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
