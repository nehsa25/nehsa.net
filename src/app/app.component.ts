import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, TitleStrategy } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { version } from '../version';
import { MatButtonModule } from '@angular/material/button';
import { Observable, forkJoin } from 'rxjs';
import { UserPopupComponent } from './main/user-popup/user-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { NameAboutType } from './types/nameabout.type';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    RouterOutlet,
    NavbarComponent, 
    CornerListenerComponent, 
    MatIcon, 
    BreadcrumbComponent,
    BreadcrumbItemDirective, 
    MatButtonModule, 
    MatTooltipModule
  ],
  providers: [HttpService, UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  quote = "";
  posTerms = "";
  namePerson: NameAboutType = new NameAboutType();
  getQueries: Array<Observable<any>> = new Array<Observable<any>>();
  nameConfirmed = false;
  constructor(
    public httpClient: HttpService,
    public userService: UserService,
    public nameDialog: MatDialog
  ) {
    var getQuotes = this.httpClient.getQuote();
    var getName = this.httpClient.getName();
    var getPosTerms = this.httpClient.getPosTerms();
    this.getQueries.push(getQuotes);
    this.getQueries.push(getName);
    this.getQueries.push(getPosTerms);
  };

  ngOnInit() {
    forkJoin(this.getQueries).subscribe(next => {
      if (next == null) {
        return;
      }
      this.quote = next[0]
      this.namePerson = next[1];
      this.userService.name = this.namePerson.Name;
      this.posTerms = next[2];
      this.getRealName();
    });
  }

  getRealName() {
    const dialogRef = this.nameDialog.open(UserPopupComponent, {
      data: {
        namePerson: this.namePerson
      },
      width: '450px',
    });
    dialogRef.componentInstance.emitService.subscribe((val) => {
      if (val) {
        this.nameConfirmed = true;
        this.httpClient.updateName(this.namePerson.Name).subscribe(data => {
          if (data != null && data != "") {
              console.log("Name updated!: " + data.toString()) ;
          }
        });
      }
    });
  }

  public getBuild() {
    return version.number;
  }
}
