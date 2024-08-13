import { Component } from '@angular/core';

@Component({
  selector: 'app-scratch',
  standalone: true,
  imports: [],
  templateUrl: './scratch.component.html',
  styleUrl: './scratch.component.scss'
})
export class ScratchComponent {
  constructor() {
    this.testStrictEquality();
  }

  testStrictEquality() {
    const num = 10;
    const str = "10";
    
    console.log(num === (str as any)); // false (different types: number and string)
    console.log(num == (str as any));  // true (string "10" is converted to number 10 before comparison)
  }
}
