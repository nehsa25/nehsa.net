import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from '../../services/http.service';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-this-website',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, NgIf, CommentComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './this-website.component.html',
  styleUrl: './this-website.component.scss'
})
export class ThisWebsiteComponent {
  testapiCheck = false;
  testapiSuccess = false;
  testdbChecked = false;
  testdbSuccess = false;
  constructor(
    public httpClient: HttpService) { }

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
