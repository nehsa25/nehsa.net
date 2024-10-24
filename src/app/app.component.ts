import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, Input, NO_ERRORS_SCHEMA, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CornerListenerComponent } from './shared-components/corner-listener/corner-listener.component';
import { MatIcon } from '@angular/material/icon';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { CommonModule, NgIf } from '@angular/common';
import { HttpService } from './services/http.service';
import { version } from '../version';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subject, async, forkJoin, retry } from 'rxjs';
import { UserPopupComponent } from './main/user-popup/user-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { NameAboutType } from './types/nameabout.type';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from './services/user.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { FranticTim } from './types/tim.type';
import { Tree } from './types/tree';
import { Cloud } from './types/cloud';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CometComponent } from './shared-components/comet/comet.component';
import { ScriptService } from 'ngx-script-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
    NgIf,
    CometComponent, RouterLink
  ],
  providers: [
    HttpService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('copyright') copyright: ElementRef | undefined;
  @Input() duration = 10;
  private _reversify = false;
  startPosition: number = 0;
  expandedBio = false;
  title = "";
  quote = "";
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
  timMessages: Array<FranticTim> = new Array<FranticTim>();
  trees = new Array<Tree>();
  clouds = new Array<Cloud>();
  timMessage = "";
  showTimTest = false;
  lastTimIndex = 0;
  fromTim = false;
  timMovingLeft = false;
  playState = "running";
  animationDuration = "10s";
  timSpeed = .7;
  pausedExpanded = false;
  isStoryHidden = false;

  constructor(
    private ref: ChangeDetectorRef,
    public httpClient: HttpService,
    public userService: UserService,
    public nameDialog: MatDialog,
    public snackBar: MatSnackBar,
    private scriptService: ScriptService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    var getQuotes = this.httpClient.getQuote();
    var getName = this.httpClient.getNames(2);
    this.getQueries.push(getQuotes);
    this.getQueries.push(getName);

    // trees
    for (let i = 0; i <= 10; i++) {
      this.trees.push(new Tree(true));
    }

    // clouds
    for (let i = 0; i <= 2; i++) {
      this.clouds.push(new Cloud(false));
    }

    // tim reverse
    //this.timMessages.push(this.setEvent("tim reverse", .8, false, true, 1000 * 10));

    //text, speed, movingLeft, fromTim, text_wait
    this.timMessages.push(this.setEvent("Meet Timoth&eacute;e. He's off on an adventure!", .7, true, false, 1000 * 2));
    this.timMessages.push(this.setEvent("Bonjour! I'm Timoth&eacute;e and I'm on an adventure!", .8, true, true, 1000 * 10));
    this.timMessages.push(this.setEvent("I'm &quot;Adventuring Timoth&eacute;e!&quot; Whew!", .9, true, true, 1000 * 20));
    this.timMessages.push(this.setEvent("Timoth&eacute;e takes in a large inhale of breath.", .9, true, false, 1000 * 24));
    this.timMessages.push(this.setEvent("hmph. hhhmmmmmmmmmm. HHHMMMMM!!!", 1, true, true, 1000 * 26));
    this.timMessages.push(this.setEvent("Timoth&eacute;e exhales loudly.", .9, true, false, 1000 * 28));
    this.timMessages.push(this.setEvent("Can you smell that? The air is different out here!", 1, true, true, 1000 * 30));
    this.timMessages.push(this.setEvent("This is &quot;AIR&quot; air.", 1, true, true, 1000 * 40));
    this.timMessages.push(this.setEvent("Truly riveting!", .9, true, false, 1000 * 42));
    this.timMessages.push(this.setEvent("Yup.. off adventuring..", 1, true, true, 1000 * 45));
    this.timMessages.push(this.setEvent("Timoth&eacute;e starts to hum..", .9, true, false, 1000 * 47));
    this.timMessages.push(this.setEvent("Da-da-da-da-da-da-da Dum-dum-dum-dum-dum-dum Da-da-da-da DUM-DUM-DUM", 1, true, true, 1000 * 52));
    this.timMessages.push(this.setEvent("Hmm-hmm-hmm-hmm-hmm-hmm HMM-Hmm-hmm Hm-hmm-hmm-hmm DUM-DUM-DUM", 1, true, true, 1000 * 55));
    this.timMessages.push(this.setEvent("Did I feed Gaston before I left!?", .9, true, true, 1000 * 57));
    this.timMessages.push(this.setEvent("I was packing my bag, the study, then I went to the pantry..", .9, true, true, 1000 * 60));
    this.timMessages.push(this.setEvent("Now, Timoth&eacute;e did feed Gaston before he left for adventure..", .9, true, false, 1000 * 65));
    this.timMessages.push(this.setEvent("Gaston is happy, quite full, and is right this moment relaxing lackadaisically..", .9, true, false, 1000 * 67));
    this.timMessages.push(this.setEvent("I'm sure I fed Gaston!", .8, true, true, 1000 * 75));
    this.timMessages.push(this.setEvent("There is no way I would forget to feed Gaston. No way.", .5, true, true, 1000 * 77));
    this.timMessages.push(this.setEvent("Oh no.", .1, true, true, 1000 * 90));
    this.timMessages.push(this.setEvent("OHH NO.", .1, true, true, 1000 * 92));
    this.timMessages.push(this.setEvent("OHH NO!", .1, false, true, 1000 * 96));
    this.timMessages.push(this.setEvent("GASTON! I'm coming home!", 1.1, false, true, 1000 * 97));
    this.timMessages.push(this.setEvent("I'm coming!", 1.2, false, true, 1000 * 100));
    this.timMessages.push(this.setEvent("I'm sorry Gaston! Timoth&eacute;e's coming!", 1.3, false, true, 1000 * 110));
    this.timMessages.push(this.setEvent("Again, Gaston is fine. Happy for some alone time, really.", .9, false, false, 1000 * 113));
    this.timMessages.push(this.setEvent("Ohh, poor Gaston!", .5, false, true, 1000 * 117));
    this.timMessages.push(this.setEvent("Ohh, poor Timoth&eacute;e..", .5, false, false, 1000 * 120))
    this.timMessages.push(this.setEvent("GASTON!", 1.7, false, true, 1000 * 125));
    this.timMessages.push(this.setEvent("GASTON!!", 1.8, false, true, 1000 * 127));
    this.timMessages.push(this.setEvent("Whew! I knew I fed Gaston!", 1, true, true, 1000 * 130));
    this.timMessages.push(this.setEvent("Glad that's settled. Timoth&eacute;e about to start huming again!", .9, true, false, 1000 * 135));
    this.timMessages.push(this.setEvent("Hmm-hmm-hmmmmmmmm-HMm-hmm!", 1, true, true, 1000 * 140));
    this.timMessages.push(this.setEvent("Bravo sir, bravo.", .9, true, false, 1000 * 143));
    this.timMessages.push(this.setEvent("Fin.", 1, true, false, 1000 * 165));
    this.timMessages.push(this.setEvent("Vere finitus. Fin.", 1, true, false, 1000 * 175));
    this.timMessages.push(this.setEvent("This has been a production of &quot;Jesse playing with CSS animations.&quot;<br>Copyright 2024 nehsa.net, All Right Reserved. Feed hungry people. Water thirty people.", 1, true, true, 1000 * 190));
    this.timMessages.push(this.setEvent("", 1, true, false, 1000 * 195));
    this.timMessages.push(this.setEvent("", 1, true, false, 1000 * 210));
  };

  // Angular lifecycle hooks
  ngOnInit() {
    (window as any).msAdsQueue = (window as any).msAdsQueue || [];
    (window as any).msAdsQueue.push(() => {
      (window as any).mmnow.render({
        adUnitId: "1940502965",
        elementId: "1940502965"
      });
    });

    https://adsdk.microsoft.com/mmnow/sdk.js?siteId=10323057&publisherId=254006085')

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
    });

    // tree loop
    this.trees.forEach((tree, index) => {
      this.trees[index] = tree;
      this.ref.markForCheck();
    });

    // message loop
    this.timMessages.forEach((tim, index) => {
      setTimeout(() => {
        this.runEvent(tim);
      }, tim.text_wait);

      setInterval(() => {
        this.runEvent(tim);
      }, this.timMessages[this.timMessages.length - 1].text_wait + 10000);

    });
  }

  ngOnDestroy(): void {
  }

  // accessors
  get reversify(): boolean {
    //console.log("I've been gotten! The horror! The horror! (value: " + this._reversify + ")");
    return this._reversify;
  }
  set reversify(value: boolean) {
    //console.log("The thrill! The excitement! I've been set! (value: " + value + ")");
    this._reversify = value;
  }

  // ensure we are at the top of the page
  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  setEvent(text: string, speed: number, left: boolean, fromTim: boolean, text_wait: number) {
    const event = new FranticTim(text, speed, left, fromTim, text_wait);
    this.runEvent(event);
    return event;
  }

  public runEvent(event: FranticTim) {
    this.timMessage = event.text;
    this.fromTim = event.fromTim;
    this.duration = event.speed;
    this.timMovingLeft = event.movingLeft;
    this.timMovingLeft == true ? this.reversify = false : this.reversify = true;
    this.ref.markForCheck();
    return event;
  }

  // pause button controls
  pauseAnimation(event: any) {
    this.playState == 'running' ? this.playState = 'paused' : this.playState = 'running';
    event.stopPropagation();
  }

  // hide story (to show pretty background)
  hideStory(event: any) {
    this.isStoryHidden == true ? this.isStoryHidden = false : this.isStoryHidden = true;
    event.stopPropagation();
  }

  // changes the speed of tim's animation
  changeSpeed(event: any) {
    this.snackBar.open("changing speed - not implemented yet", "OK");
    this.timSpeed = event.srcElement.value;
    this.animationDuration = this.timSpeed + 's';
  }

  changeSpeedMouse(event: any) {
    event.stopPropagation();
  }

  // reverse tim's direction
  reverseAnimation(event: any) {
    this.reversify == true ? this.reversify = false : this.reversify = true;
    event.stopPropagation();
  }

  // swap tim's direction
  swapAnimation(event: any) {
    this.timMovingLeft = !this.timMovingLeft;
    event.stopPropagation();
  }

  // expand pause button controls
  expandControl(event: any) {
    this.pausedExpanded ? this.pausedExpanded = false : this.pausedExpanded = true;
    event.stopPropagation();
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
    this.changeDetectorRef.detectChanges();
  }

  setExpand() {
    this.expandedBio = !this.expandedBio;
    if (this.expandedBio) {
      this.title = "Jesse Stone";
    } else {
      this.title = "";
    }
  }

  calculateSpeed(x: number, y: number, width: number, height: number) {
    return Math.sqrt(Math.pow(width - x, 2) + Math.pow(height - y, 2));
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
