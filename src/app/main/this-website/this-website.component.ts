import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-this-website',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './this-website.component.html',
  styleUrl: './this-website.component.scss'
})
export class ThisWebsiteComponent {

}
