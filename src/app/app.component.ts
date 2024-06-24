import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { version } from '../version';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subject, forkJoin } from 'rxjs';
import { UserPopupComponent } from './main/user-popup/user-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { NameAboutType } from './types/nameabout.type';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from './services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MudComponent } from './main/mud/mud.component';

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
    MatTooltipModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [HttpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  expandedBio = true;
  title = "Jesse Stone";
  quote = "";
  posTerms = "";
  openSideNav = true;
  names: Array<NameAboutType> = new Array<NameAboutType>();
  getQueries: Array<Observable<any>> = new Array<Observable<any>>();
  nameConfirmed = false;
  fullScreen: boolean = false;
  isFullScreenEvent = new Subject<boolean>();

  constructor(
    private ref: ChangeDetectorRef,
    public httpClient: HttpService,
    public userService: UserService,
    public nameDialog: MatDialog) {
    var getQuotes = this.httpClient.getQuote();
    var getName = this.httpClient.getNames(2);
    var getPosTerms = this.httpClient.getPosTerms();
    this.getQueries.push(getQuotes);
    this.getQueries.push(getName);
    this.getQueries.push(getPosTerms);
  };

  ngOnInit() {
    this.isFullScreenEvent.subscribe(data => { 
      console.log("Full screen event: " + data.toString()); 
      this.fullScreen = data;
      this.ref.detectChanges();
    });

    this.chkScreenMode();

    forkJoin(this.getQueries).subscribe(next => {
      if (next == null) {
        return;
      }
      this.quote = next[0]
      this.names = next[1];
      this.userService.name = this.names[0].Name;
      this.userService.about = this.names[0].About
      this.posTerms = next[2];
      this.getName2ndAttempt();
    });

    this.sleep(5000).then(() => {
      this.expandedBio = false;
      this.title = "Welcome to nehsa.net!";
    });
  }

  ngOnDestroy(): void {
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  elem: any; isFullScreen: boolean | undefined;
  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmodes(event: any) {
    this.chkScreenMode();
  }
  chkScreenMode() {
    if (document.fullscreenElement) {
      //fullscreen
      this.isFullScreen = true;
    } else {
      //not in full screen
      this.isFullScreen = false;
    }

    this.isFullScreenEvent.next(this.isFullScreen );
  }


  setExpand() {
    this.expandedBio = !this.expandedBio;
    if (this.expandedBio) {
      this.title = "Jesse Stone";
    }
  }

  getName2ndAttempt() {
    const dialogRef = this.nameDialog.open(UserPopupComponent, {
      data: {
        names: this.names
      },
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.componentInstance.emitService.subscribe((val) => {
      if (val) {
        this.userService.name = val.Name;
        this.userService.about = val.About;
        this.nameConfirmed = true;
        this.httpClient.updateName(this.names[1].Name).subscribe(data => {
          if (data != null && data != "") {
            console.log("Name updated!: " + data.toString());
          }
        });
      }
    });
  }

  public getBuild() {
    return version.number;
  }
}
