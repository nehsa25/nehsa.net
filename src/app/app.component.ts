import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, TitleStrategy } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { version } from '../version';
import { MatButtonModule } from '@angular/material/button';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NavbarComponent, CornerListenerComponent, MatIcon, BreadcrumbComponent, BreadcrumbItemDirective, MatButtonModule],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quote = "";
  name = "";
  getQueries: Array<Observable<any>> = new Array<Observable<any>>();

  constructor(public httpClient: HttpService) {
    var getQuotes = this.httpClient.getQuote();
    var getName = this.httpClient.getName();
    this.getQueries.push(getQuotes);
    this.getQueries.push(getName);
   };

  ngOnInit() {
    forkJoin(this.getQueries).subscribe(next => {
      if (next == null) {
        return;
      }
      this.quote = next[0]
      this.name = next[1];
    });
  }

  public getBuild() {
    return version.number;
  }
}
