import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatIconModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.scss'
})
export class SqlComponent {
  private _page_name = "sql";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}
  
  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
