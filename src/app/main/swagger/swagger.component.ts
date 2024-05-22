import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-swagger',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './swagger.component.html',
  styleUrl: './swagger.component.scss'
})
export class SwaggerComponent {
  swagger: string = "Please Wait.";
  constructor(public httpClient: HttpService) { };

  ngOnInit() {
    this.httpClient.getSwagger().subscribe(data => {
      if (data != null && data != "") {
        this.swagger = data.toString();
      }
    });
  }

}
