import { Component } from '@angular/core';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, MatCardImage, MatIcon, MatButton, RouterLink],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {
  playState = "paused";

  constructor(public userService: UserService) { this.userService.page = "webdesign"; }

  ngOnInit() { }

  playStateStart() {
    this.playState = "running";
  }

  playStatePause() {
    this.playState = "paused";
  }

  playStateReverse() {
    this.playState = "reversed";
  }
}
