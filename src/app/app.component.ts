import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CornerListenerComponent, MatIcon,  BreadcrumbComponent, BreadcrumbItemDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Jesse Stone - nehsa.net";
}
