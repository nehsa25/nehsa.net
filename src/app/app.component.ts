import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { CommonModule, NgIf } from '@angular/common';
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
import { MatSliderModule } from '@angular/material/slider';

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
    MatSidenavModule,
    MatSliderModule,
    NgIf
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
  osCheckIsDark = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? true : false;
  appIsDark = false;
  osIsDark = false;
  darkmode_value = 0; // slider value
  bobtext = "This is Grumpy Bob. He is going on an adventure..";

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
    this.osIsDark = this.osCheckIsDark();
    this.appIsDark = this.userService.appIsDark();
    if (this.osIsDark) {
      console.log("OS is dark mode.  Setting website initially to dark mode");
      this.appIsDark = true;
      this.darkmode_value = 1;
      this.userService.setDarkMode(true);
    }
    console.log("Theme mode: osIsDark: " + this.osIsDark + " appIsDark: " + this.appIsDark);

    this.isFullScreenEvent.subscribe(data => {
      console.log("Full screen event: " + data.toString());
      this.fullScreen = data;
      this.ref.detectChanges();
    });

    this.checkScreenMode();

    forkJoin(this.getQueries).subscribe(next => {
      if (next == null) {
        return;
      }
      this.quote = next[0]
      this.names = next[1];
      this.userService.name = this.names[0].Name;
      this.userService.about = this.names[0].About
      this.posTerms = next[2];
      //this.getName2ndAttempt();
    });

    this.sleep(5000).then(() => {
      this.expandedBio = false;
      this.title = "";
    });
  }

  ngOnDestroy(): void {
  }

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
    this.checkScreenMode();
  }
  checkScreenMode() {
    if (document.fullscreenElement) {
      this.isFullScreen = true;
    } else {
      this.isFullScreen = false;
    }
    this.isFullScreenEvent.next(this.isFullScreen);
  }

  themeChange(event: any) {
    let slider_value = event.srcElement.value == 0 ? true : false;
    console.log(slider_value);
    if (slider_value == true) {
      this.appIsDark = false;
      this.userService.setDarkMode(false);
    } else {
      this.appIsDark = true;
      this.userService.setDarkMode(true);
    }
  }

  themeChangeBtnClick(darkMode: boolean) {
    this.darkmode_value = darkMode ? 1 : 0;
    this.userService.setDarkMode(darkMode);
  }

  setExpand() {
    this.expandedBio = !this.expandedBio;
    if (this.expandedBio) {
      this.title = "Jesse Stone";
    } else {
      this.title = "";
    }
  }

  getName2ndAttempt() {
    if (this.userService.name != "") {
      this.names[0].Name == this.userService.name;
    }
    const dialogRef = this.nameDialog.open(UserPopupComponent, {
      data: {
        names: this.names,
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
