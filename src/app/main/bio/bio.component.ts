import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

  public hireme() {
    console.log("yay");
  }
  public sendmsg() {
    console.log("yay2");
  }
}
