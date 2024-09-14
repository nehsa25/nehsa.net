import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { Subject } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-docker',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './docker.component.html',
  styleUrl: './docker.component.scss'
})
export class DockerComponent {
  private _page_name = "docker";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}
  
  ngOnInit() { 
    this.userService.page = this._page_name;
  }
}
