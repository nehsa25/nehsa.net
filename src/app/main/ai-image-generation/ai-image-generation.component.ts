import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from "../../shared-components/comment/comment.component";
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';

@Component({
    selector: 'app-ai-image-generation',
    standalone: true,
    templateUrl: './ai-image-generation.component.html',
    styleUrl: './ai-image-generation.component.scss',
    imports: [MatCardModule, CommentComponent],
})
export class AiImageGenerationComponent {
    _page_name = "ai-generation";
    totalItems = 0;
  
    constructor(
      public userService: UserService
    ) {}
  
    ngOnInit() { 
      this.userService.page = this._page_name;
    }

}
