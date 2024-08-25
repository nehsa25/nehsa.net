import { Component } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public userService: UserService, 
    private router: Router
  ) { }

  sendUser = (page: string) => {
    this.userService.pagePath = page;
    this.router.navigate([page]);
  }
}
