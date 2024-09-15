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
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { RelatedContentComponent } from '../../shared-components/related-content/related-content.component';

@Component({
  selector: 'app-go',
  standalone: true,
  imports: [
    MatCardModule,
    CommentComponent,
    NgFor,
    RouterLink,
    MatButtonModule,
    MatExpansionModule,
    MatIcon,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule, 
    MatProgressSpinnerModule,
    MatInputModule, RelatedContentComponent],

  templateUrl: './go.component.html',
  styleUrl: './go.component.scss'
})
export class GoComponent {
  city = new FormControl('');
  type = new FormControl('');
  unit = new FormControl('');
  scrapeUrl = new FormControl('');
  units: string[] = ['Metric', 'Imperial'];
  types: string[] = ['Words', "Full", "Temperature"];
  origButtonName =  "Fetch Weather";
  origscapeButtonName = "Scape Data!";
  buttonName = this.origButtonName;
  scapeButtonName = this.origscapeButtonName;
  isLoading = false;
  scrapeEnabled = true;
  weather: string = "";
  scrapeData: string = "";
  constructor(public userService: UserService, public httpService: HttpService) { 
    this.userService.page = "go";
    this.city.setValue('Vancouver');     
    this.unit.setValue('Imperial');
    this.type.setValue('Full');
    this.scrapeUrl.setValue('https://www.oregonfoodbank.org/');
  }

  clearCity() {
    this.city.setValue('');
  }

  clearUrl() {
    this.scrapeUrl.setValue('');
  }

  getWeather() {
    this.buttonName = "BOOM!";
    this.isLoading = true;
    const city = this.city.value ?? 'Zürich, Switzerland';
    const unitStyle = this.unit.value ?? 'imperial';
    const typeStyle = this.type.value ?? 'words';
    this.httpService.getWeather(city, unitStyle, typeStyle).subscribe((data: any) => {
      this.weather = data;
      if (this.type.value?.toLowerCase() === 'temperature' && unitStyle.toLowerCase() === 'imperial')
        this.weather = `${this.weather}°F`;
      else if (this.type.value?.toLowerCase() === 'temperature' && unitStyle.toLowerCase() === 'metric')
        this.weather = `${this.weather}°C`;
      this.buttonName = this.origButtonName;
      this.isLoading = false;
    });
  }

  getScrapeData() {
    this.buttonName = "Scr-aa-pe!";
    this.isLoading = true;
    const url = this.scrapeUrl.value ?? 'https://www.oregonfoodbank.org/';
    this.httpService.getScrapeData(url).subscribe((data: any) => {
      this.scrapeData = data;
      this.buttonName = this.origButtonName;
      this.isLoading = false;
      this.scrapeEnabled = false;
    });
  }
}
