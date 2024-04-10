import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, TitleStrategy } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NavbarComponent, CornerListenerComponent, MatIcon,  BreadcrumbComponent, BreadcrumbItemDirective],
  providers: [ HttpService ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quote = "";
  constructor(public httpClient: HttpService) {};

  ngOnInit() {
    // this.httpClient.getDouglasAdamQuote().subscribe(data => {
    //   this.quote = data.toString();
    // });
  }
}
