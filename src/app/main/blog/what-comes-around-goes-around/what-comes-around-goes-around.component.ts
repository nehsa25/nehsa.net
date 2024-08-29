import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../../shared-components/comment/comment.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-what-comes-around-goes-around',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  templateUrl: './what-comes-around-goes-around.component.html',
  styleUrl: './what-comes-around-goes-around.component.scss'
})
export class WhatComesAroundGoesAroundComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'what-comes-around-goes-around';
  }

}
