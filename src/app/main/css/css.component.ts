import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-css',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {

}
