import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
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
import { FranticTim } from './types/tim.type';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Tree } from './types/tree';
import { Cloud } from './types/cloud';

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
  @Input() duration = 10;
  startPosition: number = 0;
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
  timMessages: Array<FranticTim> = new Array<FranticTim>();
  trees = new Array<Tree>();
  clouds = new Array<Cloud>();
  timMessage = "";
  showTimTest = false;
  lastTimIndex = 0;
  timSpeaking = false;
  timMovingLeft = false;
  playState = "running";
  reversify = false;
  animationDuration = "10s";
  directionLeft = true;
  timSpeed = .7;
  pausedExpanded = false;

  constructor(
    private ref: ChangeDetectorRef,
    public httpClient: HttpService,
    public userService: UserService,
    public nameDialog: MatDialog
  ) {
    var getQuotes = this.httpClient.getQuote();
    var getName = this.httpClient.getNames(2);
    var getPosTerms = this.httpClient.getPosTerms();
    this.getQueries.push(getQuotes);
    this.getQueries.push(getName);
    this.getQueries.push(getPosTerms);

    // trees
    for (let i = 0; i <= 10; i++) {
      this.trees.push(new Tree(true));
    }

    // clouds
    for (let i = 0; i <= 2; i++) {
      this.clouds.push(new Cloud(false));
    }

    //text, speed, movingLeft, fromTim, text_wait
    this.timMessages.push(new FranticTim("Meet Timoth&eacute;e. He's off on an adventure!", .7, true, false, 1000 * 2));
    this.timMessages.push(new FranticTim("Bonjour! I'm Timoth&eacute;e and I'm on an adventure!", .8, true, true, 1000 * 10));
    this.timMessages.push(new FranticTim("I'm &quot;Adventuring Timoth&eacute;e!&quot; Whew!", .9, true, true, 1000 * 20));
    this.timMessages.push(new FranticTim("Timoth&eacute;e takes in a large inhale of smell.", .9, true, false, 1000 * 24));
    this.timMessages.push(new FranticTim("hmph. hhhmmmmmmmmmm. HHHMMMMM!!!", 1, true, true, 1000 * 26));
    this.timMessages.push(new FranticTim("Timoth&eacute;e exhales loudly.", .9, true, false, 1000 * 28));
    this.timMessages.push(new FranticTim("Can you smell that? The air is different out here!", 1, true, true, 1000 * 30));
    this.timMessages.push(new FranticTim("This is AIR air.", 1, true, true, 1000 * 40));
    this.timMessages.push(new FranticTim("Truly riveting!", .9, true, false, 1000 * 42));
    this.timMessages.push(new FranticTim("Yup.. off adventuring..", 1, true, true, 1000 * 45));
    this.timMessages.push(new FranticTim("Timoth&eacute;e starts to hum..", .9, true, false, 1000 * 47));
    this.timMessages.push(new FranticTim("Da-da-da-da-da-da-da Dum-dum-dum-dum-dum-dum Da-da-da-da DUM-DUM-DUM", 1, true, true, 1000 * 52));
    this.timMessages.push(new FranticTim("Hmm-hmm-hmm-hmm-hmm-hmm HMM-Hmm-hmm Hm-hmm-hmm-hmm DUM-DUM-DUM", 1, true, true, 1000 * 55));
    this.timMessages.push(new FranticTim("Did I feed Gaston before I left!?", .9, true, true, 1000 * 57));
    this.timMessages.push(new FranticTim("I was packing my bag, the study, then I went to the pantry..", .9, true, true, 1000 * 60));
    this.timMessages.push(new FranticTim("Now, Timoth&eacute;e did feed Gaston before he left for adventure..", .9, true, false, 1000 * 65));
    this.timMessages.push(new FranticTim("Gaston is happy, quite full, and is right this moment relaxing lackadaisically..", .9, true, false, 1000 * 67));
    this.timMessages.push(new FranticTim("I'm sure I fed Gaston!", .8, true, true, 1000 * 75));
    this.timMessages.push(new FranticTim("There is no way I would forget to feed Gaston. No way.", .5, true, true, 1000 * 1));
    this.timMessages.push(new FranticTim("Oh no.", .1, true, true, 1000 * 90));
    this.timMessages.push(new FranticTim("OHH NO.", .1, true, true, 1000 * 92));
    this.timMessages.push(new FranticTim("OHH NO!", .1, false, true, 1000 * 96));
    this.timMessages.push(new FranticTim("GASTON!", 1.1, false, true, 1000 * 97));
    this.timMessages.push(new FranticTim("I'm coming!", 1.2, false, true, 1000 * 100));
    this.timMessages.push(new FranticTim("I'm sorry Gaston! Timoth&eacute;e's coming!", 1.3, false, true, 1000 * 110));
    this.timMessages.push(new FranticTim("Ohh, poor thing!", .5, false, true, 1000 * 115));
    this.timMessages.push(new FranticTim("Ohh, poor thing..", .5, false, false, 1000 * 117))
    this.timMessages.push(new FranticTim("GASTON!", 1.7, false, true, 1000 * 120));
    this.timMessages.push(new FranticTim("GASTON!", 1.8, false, true, 1000 * 130));
    this.timMessages.push(new FranticTim("WHEW! I KNEW I FED GASTON!", 1, false, true, 1000 * 150));
    this.timMessages.push(new FranticTim("Timoth&eacute;e starts to hum again..", .9, false, false, 1000 * 152));
    this.timMessages.push(new FranticTim("Hmm-hmm-hmmmmmmmm-HMm-hmm!", 1, false, true, 1000 * 155));
    this.timMessages.push(new FranticTim("fin.", 1, true, false, 1000 * 165));
    this.timMessages.push(new FranticTim("", 1, false, true, 1000 * 170));
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

    // tree loop
    this.trees.forEach((tree, index) => {
      this.trees[index] = tree;
      this.ref.markForCheck();
    });

    // message loop
    this.timMessages.forEach((tim, index) => {
      setTimeout(() => {
        this.timMessage = tim.text;
        this.timSpeaking = tim.fromTim;
        this.duration = tim.speed + 5000;
        this.timMovingLeft = tim.movingLeft;
        this.ref.markForCheck();
      }, tim.text_wait);
    });
    setInterval(() => {
      this.timMessages.forEach((tim, index) => {
        setTimeout(() => {
          this.timMessage = tim.text;
          this.timSpeaking = tim.fromTim;
          this.duration = tim.speed + 5000;
          this.timMovingLeft = tim.movingLeft;
          this.ref.markForCheck();
        }, tim.text_wait);
      });
    }, this.timMessages[this.timMessages.length - 1].text_wait + 10000);
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
  
  pauseAnimation(event: any) {
    this.playState == 'running' ? this.playState = 'paused' : this.playState = 'running';
    event.stopPropagation();
  }

  reverseAnimation(event: any) {
    this.reversify == true ? this.reversify = false : this.reversify = true;
    event.stopPropagation();
  }

  swapAnimation(event: any) {
    this.timMovingLeft = !this.timMovingLeft;
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
  }

  setExpand() {
    this.expandedBio = !this.expandedBio;
    if (this.expandedBio) {
      this.title = "Jesse Stone";
    } else {
      this.title = "";
    }
  }

  expandControl(event: any) {
    this.pausedExpanded = this.pausedExpanded ? this.pausedExpanded = false : this.pausedExpanded = true;
    event.stopPropagation();
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
