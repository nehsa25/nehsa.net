import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from '../../services/http.service';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-swagger',
  standalone: true,
  imports: [MatCardModule, CommentComponent, RelatedContentComponent],
  providers: [HttpService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swagger.component.html',
  styleUrl: './swagger.component.scss'
})
export class SwaggerComponent {
  swagger: string = "Please Wait.";  
  private _page_name = "school";
  totalItems = 0;
  constructor(
    public httpClient: HttpService,
    public userService: UserService) { };

    ngOnInit() { 
      this.userService.page = this._page_name;
    }
}
