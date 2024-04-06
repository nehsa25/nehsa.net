import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pytest',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pytest.component.html',
  styleUrl: './pytest.component.scss'
})
export class PytestComponent {

}
