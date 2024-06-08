import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from '../../services/http.service';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-this-website',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, NgIf],
  templateUrl: './this-website.component.html',
  styleUrl: './this-website.component.scss'
})
export class ThisWebsiteComponent {
  testapiCheck = false;
  testapiSuccess = false;
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
}
