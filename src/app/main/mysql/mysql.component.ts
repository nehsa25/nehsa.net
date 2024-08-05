import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-mysql',
  standalone: true,
  imports: [CommentComponent, MatCardModule, MatExpansionModule],
  templateUrl: './mysql.component.html',
  styleUrl: './mysql.component.scss'
})
export class MysqlComponent {
  private _page_name = "mysql";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
