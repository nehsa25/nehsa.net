import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ohai',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './ohai.component.html',
  styleUrl: './ohai.component.scss'
})
export class OhaiComponent {

}
