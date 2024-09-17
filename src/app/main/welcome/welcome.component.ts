import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
declare var anime: any;

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor(public userService: UserService) {
    this.userService.page = "welcome";

  }

  ngAfterViewInit(): void {

  }
}
