import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-azure',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RouterLink, MatButtonModule, MatExpansionModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './azure.component.html',
  styleUrl: './azure.component.scss'
})
export class AzureComponent {
  private _page_name = "azure";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
