import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { forkJoin, Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatButtonModule, MatTooltipModule, MatIconModule, CommentComponent, MatExpansionModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpService],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {
  posTerms = "";
  doghover: boolean = false;
  getQueries: Array<Observable<any>> = new Array<Observable<any>>();

  public hireme() {
    console.log("yay");
  }
  public sendmsg() {
    console.log("yay2");
  }

  public hover() {
    this.doghover = true;
    console.log("yuppers!");
  };

  private _page_name = "bio";
  totalItems = 0;

  constructor(
    public userService: UserService,
    public httpClient: HttpService,
  ) { }

  ngOnInit() {
    this.userService.page = this._page_name;
    var getPosTerms = this.httpClient.getPosTerms();
    this.getQueries.push(getPosTerms);

    forkJoin(this.getQueries).subscribe(next => {
      if (next == null) {
        return;
      }
      this.posTerms = next[0];
    });
  }
}
