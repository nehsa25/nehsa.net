import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { HttpService } from '../../services/http.service';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { FormControl, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-go',
  standalone: true,
  imports: [
    MatCardModule,
    CommentComponent,
    NgFor,
    MatButton,
    MatExpansionModule,
    MatIcon,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule, 
    MatProgressSpinnerModule,
    MatInputModule],

  templateUrl: './go.component.html',
  styleUrl: './go.component.scss'
})
export class GoComponent {
  city: string = "Cape Canaveral, FL";
  type = new FormControl('');
  unit = new FormControl('');
  units: string[] = ['Metric', 'Imperial'];
  types: string[] = ['Words', "Full", "Temperature"];
  origButtonName =  "Fetch Weather";
  buttonName = this.origButtonName;
  isLoading = false;
  weather: any;
  constructor(public userService: UserService, public httpService: HttpService) { 
    this.userService.page = "go";
    if (this.unit.value === '') {
      this.unit.setValue('Imperial');
    }
    if (this.type.value === '') {
      this.type.setValue('Words');      
    }
  }

  getWeather() {
    this.buttonName = "BOOM!";
    this.isLoading = true;
    const unitStyle = this.unit.value ?? 'imperial';
    const typeStyle = this.type.value ?? 'words';
    console.log(this.type);
    this.httpService.getWeather(this.city, unitStyle, typeStyle).subscribe((data: any) => {
      this.weather = data;
      if (this.type.value === 'Temperature' && typeStyle === 'imperial')
        this.weather = `${this.weather}°F`;
      else if (this.type.value === 'Temperature' && typeStyle === 'metric')
        this.weather = `${this.weather}°C`;

      this.buttonName = this.origButtonName;
      this.isLoading = false;
    });
  }
}
