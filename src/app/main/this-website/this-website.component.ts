import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from '../../services/http.service';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CommentType } from '../../types/comment.type';
import { MatExpansionModule } from '@angular/material/expansion';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-this-website',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, NgIf, CommentComponent, RouterModule, RouterLink, MatExpansionModule, RelatedContentComponent],
  providers: [HttpService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './this-website.component.html',
  styleUrl: './this-website.component.scss'
})
export class ThisWebsiteComponent {
  testapiCheck = false;
  testapiSuccess = false;
  testdbChecked = false;
  testdbSuccess = false;
  private _page_name = "this website";
  totalItems = 0;

  constructor(
    public httpClient: HttpService,
    public userService: UserService) { }

  ngOnInit() {
    this.userService.page = this._page_name;
  }

  public async testapi() {
    this.httpClient.getQuote().subscribe(data => {
      if (data != null && data != "") {
        this.testapiCheck = true;
        this.testapiSuccess = true;
      } else {
        this.testapiCheck = true;
        this.testapiSuccess = false;
      }
    });
  }

  public async testdb() {
    this.httpClient.getDBHealth().subscribe(data => {
      if (data != null && data != "") {
        this.testdbChecked = true;
        this.testdbSuccess = true;
      } else {
        this.testdbChecked = true;
        this.testdbSuccess = false;
      }
    });
  }
}
