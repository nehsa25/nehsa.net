import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../services/user.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-game-theory',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './game-theory.component.html',
  styleUrl: './game-theory.component.scss'
})

export class GameTheoryComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'Blog - game-theory';
  }
}
