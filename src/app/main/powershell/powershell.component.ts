import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-powershell',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RouterLink, MatExpansionModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './powershell.component.html',
  styleUrl: './powershell.component.scss'
})
export class PowershellComponent {
  private _page_name = "powershell";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
