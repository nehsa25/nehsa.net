import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [MatCardModule, CommentComponent, NgIf, MatButtonModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})

export class AwsComponent {
  page_name = "AWS";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) {}

  @Input() emitService = new EventEmitter();

  ngOnInit() { 
    console.log(this.userService);
  }
}
