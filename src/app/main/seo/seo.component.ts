import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-seo',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, CommentComponent, NgClass, MatButtonModule],
  templateUrl: './seo.component.html',
  styleUrl: './seo.component.scss'
})
export class SeoComponent {
  @ViewChild('searchConsole') searchConsole: ElementRef = new ElementRef(null);
  private _page_name = "seo";
  highlightArea = "";
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.page = this._page_name;
  }

  highlight(area: string) {
    this.searchConsole.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.highlightArea = area;
    setTimeout(() => {
      this.highlightArea = "";
    }, 500);
  }
}
