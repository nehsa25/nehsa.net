import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { UserService } from '../../services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [MatCardModule, CommentComponent, MatExpansionModule, RouterLink, RelatedContentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.scss'
})
export class TypescriptComponent {
  private _page_name = "typescript";
  totalItems = 0;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.page = this._page_name;
  }

  getDistanceInFathoms = (distanceInFeet: number) => { return distanceInFeet / 6 };

}

function getDistanceInFathoms(distanceInFeet: number) {
  return distanceInFeet / 6;
}