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
  constructor(public httpClient: HttpService) { };

  ngOnInit() {
    this.httpClient.getDouglasAdamQuote().subscribe(data => {
      if (data != null && data != "") {
        this.quote = data.toString();
      }
    });
  }

  public getBuild() {
    return version.number;
  }
}
