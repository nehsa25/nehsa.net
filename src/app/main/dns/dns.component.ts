import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dns',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatExpansionModule, RouterLink, MatButtonModule, CommentComponent],
  templateUrl: './dns.component.html',
  styleUrl: './dns.component.scss'
})
export class DnsComponent {
  constructor(public userService: UserService) {
    this.userService.page = 'dns';
  }
}
