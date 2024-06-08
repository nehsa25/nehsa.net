import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from '../../services/http.service';
import { CommentComponent } from '../../shared-components/comment/comment.component';

@Component({
  selector: 'app-swagger',
  standalone: true,
  imports: [MatCardModule, CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swagger.component.html',
  styleUrl: './swagger.component.scss'
})
export class SwaggerComponent {
  swagger: string = "Please Wait.";
  constructor(public httpClient: HttpService) { };

  ngOnInit() {

  }

}
