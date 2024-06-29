import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MudEvent } from '../../types/mudevent.type';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserCreateComponent } from './user-create/user-create.component';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from './map/map.component';
import { MatIcon } from '@angular/material/icon';
import { DupeNameComponent } from './dupe-name/dupe-name.component';
import { MudEvents } from '../../types/mudevents.type';
import { AiImageComponent } from './ai-image/ai-image.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { Subject } from 'rxjs';
import { CommentType } from '../../types/comment.type';

@Component({
  selector: 'app-mud',
  standalone: true,
  imports: [NgClass, NgIf, MatExpansionModule, MatCardModule, CommentComponent, NgIf, 
    MatButton, MatInputModule, MatFormFieldModule, MatLabel, MatError, FormsModule, NgFor, MatIcon],
  providers: [],
  templateUrl: './mud.component.html',
  styleUrl: './mud.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MudComponent implements OnInit, OnDestroy {
  mudEvents: string = "";
  world_name: string = "";
  usersConnected: number = 0;
  health: string = "";
  status: string = "";
  resting: boolean = false;
  command: string = "";
  socket: WebSocket;
  map_contents = "";
  mapImageName = "";
  roomImageName = "";
  panelExpanded = false;
  fullAddress: string = "";
  inventory: string[] = [];
  mapImageAvailable = false;
  room_description = "";
  roomImageAvailable = false;
  miniMap = "";
  isFullscreen = false;
  totalItems = 0;
  mapSelected = false;
  helpSelected = false;
  restSelected = false;
  eventsSubject: Subject<CommentType> = new Subject<CommentType>();  
  private _page_name = "mud";

  constructor(
    public userService: UserService,
    public dupeDialog: MatDialog,
    public usernameCreateDialog: MatDialog,
    public mapDialog: MatDialog,
  ) {
    const host = "api.nehsa.net";
    const port = 60049;
    this.fullAddress = `wss://${host}:${port}`;
    this.socket = new WebSocket(this.fullAddress);
  }

  ngOnDestroy(): void {
    this.socket.close();
  }

  ngOnInit() {
    this.userService.page = this._page_name;

    console.log("Setting up websocket connection at " + this.fullAddress)
    //Connection opened
    this.socket.addEventListener('open', function (event) {
      console.log("Connected to server");
    });

    //Listen to messages
    this.socket.addEventListener('message', o => {
      var data = JSON.parse(o.data);
      console.log(o.data);

      // get the previous html and trim as necessary
      this.trimHtml();

      // process the command
      this.processEvent(data)
    });
  }

  /** Adds a dashed border around the string */
  addBorder(message: string) {
    let roomTitle = message;
    roomTitle = roomTitle.replace(/---\d*/g, ' ');
    var desc = "";
    const descriptionLength = roomTitle.length;
    if (descriptionLength < 160) {
      for (var i = 0; i < descriptionLength + 2; i++) {
        desc += '-';
      }
    } else {
      desc += "---------------------------------------------------------------------------------------------------------------------------------------------------------------";
    }
    return `<hr class="hr-border" />${desc}<br>|${roomTitle}|<br>${desc}`
  }

  // /** Adds a bar under the string */
  // addBar(message: string) {
  //   var desc = "";
  //   const descriptionLength = message.length;
  //   if (descriptionLength < 160) {
  //     for (var i = 0; i < descriptionLength; i++) {
  //       desc += '-';
  //     }
  //   } else {
  //     desc += "---------------------------------------------------------------------------------------------------------------------------------------------------------------";
  //   }
  //   return `${message}<br>${desc}`
  // }

  expandPanel() {
    this.panelExpanded = !this.panelExpanded;
  }

  /** Adds a bar under the string */
  addBar(message: string) {
    return `${message}<hr class="hr-border" />`
  }

  startRest() {
    this.restSelected = true;
    this.sendCommand("rest");
  }

  getHelp() {
    this.helpSelected = !this.helpSelected;
    this.sendCommand("help");
  }

  launchDupe() {
    const dialogRef = this.dupeDialog.open(DupeNameComponent, {
      data: {
        name: this.userService.name
      },
      width: '400px',
      height: '250px',
    });
    dialogRef.componentInstance.emitService.subscribe((val: any) => {
      if (val === null || val === "") {
        return
      }
      this.userService.name = val;
      var resp = `{\"type\": ${MudEvents.USERNAME_ANSWER}, \"username\": \"${val}\"}`;
      console.log("Server is requesting our name, sending back: " + resp);
      this.socket.send(resp);
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  launchImage() {
    console.log("launching image..");
    const dialogRef = this.mapDialog.open(AiImageComponent, {
      data: {
        roomImageName: this.roomImageName
      },
      width: '600px',
      height: '600px',
      position: { top: '50px', right: '200px' }
    });
    dialogRef.componentInstance.emitService.subscribe((val: any) => {
      if (val == 'min') {
        this.mapImageAvailable = true;
      }
      console.log(val);
      // ULTIMATELY, THIS IS WHERE WE WILL SEND THE NAME TO THE SERVER
      // console.log("Inside request_hostname switch");
      // var name = this.userService.name;
      // var resp = '{"type": "hostname_answer", "host": "' + name + '"}';
      // console.log("Server is requesting our name, sending back: " + resp);
      // this.socket.send(resp);
    });
    dialogRef.afterClosed().subscribe(result => {
      this.mapImageAvailable = true;
    });
  }

  launchHelp(help_commands: any) {
    const dialogRef = this.mapDialog.open(HelpModalComponent, {
      data: {
        cmds: help_commands
      },
      width: '600px',
      height: '600px',
      position: { top: '50px', right: '200px' }
    });
  }

  launchMap() {
    this.mapSelected = !this.mapSelected;
    const dialogRef = this.mapDialog.open(MapComponent, {
      data: {
        map_name: this.mapImageName
      },
      width: '750px',
      position: { top: '50px', right: '200px' }
    });
    dialogRef.componentInstance.emitService.subscribe((val: any) => {
      if (val == 'min') {
        this.mapImageAvailable = true;
      }
      console.log(val);
      // ULTIMATELY, THIS IS WHERE WE WILL SEND THE NAME TO THE SERVER
      // console.log("Inside request_hostname switch");
      // var name = this.userService.name;
      // var resp = '{"type": "hostname_answer", "host": "' + name + '"}';
      // console.log("Server is requesting our name, sending back: " + resp);
      // this.socket.send(resp);
    });
    dialogRef.afterClosed().subscribe(result => {
      this.mapSelected = false;
      this.mapImageAvailable = true;
    });
  }

  createUser() {
    const dialogRef = this.usernameCreateDialog.open(UserCreateComponent, {
      data: {
        name: this.userService.name
      },
      width: '500px',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.componentInstance.emitService.subscribe((val: any) => {
      console.log(val);
      // ULTIMATELY, THIS IS WHERE WE WILL SEND THE NAME TO THE SERVER
      // console.log("Inside request_hostname switch");
      // var name = this.userService.name;
      // var resp = '{"type": "hostname_answer", "host": "' + name + '"}';
      // console.log("Server is requesting our name, sending back: " + resp);
      // this.socket.send(resp);
    });
  }

  /** Colorize the message */
  colorizeMessage(message: string) {
    const yellow_bolt = "<span class=\"material-icons yellow\">bolt</span>";
    let colors: string[] = ["red", "green", "blue", "white", "yellow", "cyan", "magenta", "black", "gray", "grey",
      "orange", "purple", "brown", "pink", "teal", "maroon", "olive", "navy",
      "lime", "aqua", "silver", "black", "gray", "orange",
      "purple", "brown", "pink", "teal", "maroon", "olive", "navy", "lime", "aqua", "silver"];
    colors.forEach(replaceValue => {
      const findExpression = new RegExp(`\\s(${replaceValue})\\s|\\s(${replaceValue}(?=\\S*['-])([a-zA-Z'-]+))`, 'gi');
      const PreventDupeExpression = new RegExp(`<span class=\"color-${findExpression}\">(.*)</span><span class=\"color-${findExpression}\">(.*)</span>`, 'gi');
      message = message.replace(findExpression, r => "<span class=\"color-" + replaceValue + "\">" + r + "</span>");
      message = message.replace(PreventDupeExpression, r => "<span class=\"color-" + replaceValue + "\">" + r + "</span>");
    });
    return message;
  }

  playerBoolean(val: boolean) {
    if (val) {
      return "Aye";
    } else {
      return "Nay";
    }
  }

  processEvent(data: MudEvent) {
    switch (data.type) {
      case MudEvents.WELCOME:
        const star_teal = "<span class=\"material-icons teal\">star</span>";
        const star_purple = "<span class=\"material-icons purple\">star</span>";
        const star_red = "<span class=\"material-icons red\">star</span>";
        const star_yellow = "<span class=\"material-icons yellow\">star</span>";
        const welcome = `${star_teal}${star_purple}${star_red}${star_yellow}This is NehsaMUD.  Welcome to the world of ${this.world_name}.${star_yellow}${star_red}${star_purple}${star_teal}<br><br>It's a project my son, Ethan, and I are working on (and you if you want).  It's a fun way to learn Python while doing something creative.  It's an homage to one of the funnest, most underrated types of game ever invented - <span class=\"important\">text-based multi-user dungeon (a &quot;MUD&quot;).</span>  MUDs were hard, they required skill, they were fast and cut-throat.  If you died, people took your <span class=\"strikeout\">shit</span> stuff.  They were also highly social and encouraged creatively. Ohh, the day, when my friend Ian figured out how to script following someone in PvP so they couldn't get away! I hope someday people &quot;script&quot; this like MUDs of old.. so I can sneak attack you while you are AFK.<br><br>NehsaMUD in a perpetual state of &quot;mostly broken&quot;. Please adjust your expectations accordingly..<br><br>Have fun!<br>`;
        if (data.message != "") {
          this.mudEvents += `${welcome}<br><br><span class=\"welcome-message\">${data.message}</span>`;
        }
        break;
      case MudEvents.BOOK:
        console.log("book: " + data.message);
        if (data.message != "") {
          this.mudEvents += `<br><span class=\"book-message\">${data.message.replace("<", "&lt;").replace(">", "&gt;")}</span>`;
        }
        break
      case MudEvents.USERNAME_REQUEST:
        //this.createUser();
        if (data.world_name != "") {
          this.world_name = data.world_name;
        }
        var name = this.userService.name;
        var resp = `{\"type\": ${MudEvents.USERNAME_ANSWER}, \"username\": \"${name}\"}`;
        console.log("Server is requesting our name, sending back: " + resp);
        this.socket.send(resp);
        break;
      case MudEvents.DUPLICATE_NAME:
        this.launchDupe();
        break;
      case MudEvents.EVENT: // check if there's an event # breeze, silence, rain
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"event-message\">" + data.message + "</span>";
        }
        break;
      case MudEvents.INFO:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"info-message\">" + this.colorizeMessage(data.message) + "</span>";
        }
        break;
      case MudEvents.ANNOUCEMENT:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"announcement-message\">" + data.message + "</span>";
        }
        break;
      case MudEvents.TIME:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"time-message\">[" + data.message + "]</span>";
        }
        break;
      case MudEvents.CHANGE_NAME:
        if (data.message != "") {
          const name = data.extra;
          this.userService.name = name;
          this.userService.about = "";
          this.mudEvents += "<br><span class=\"changename-message\">[SYSTEM " + data.message + "]</span>";
        }
        break;
      case MudEvents.COMMAND:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"input-message\">" + data.message + "</span>";
        }
        break;
      case MudEvents.YOU_ATTACK:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"you-attack-message\">" + data.message + "</span>";
        }
        break;
      case MudEvents.INVENTORY:
        var inventoryList = new Array<string>();
        data.inventory.items.forEach(o => {
          inventoryList.push(o.name);
        });
        this.inventory = inventoryList;
        break;
      case MudEvents.ERROR:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"error-message\">" + data.message + "</span>";
        }
        break;
      case MudEvents.ATTACK:
        if (data.message != "") {
          const attack_txt = data.message.split('! ')
          this.mudEvents += "<br><span class=\"attack1-message\">"
            + attack_txt
            + "</span>";
        }
        break;
      case MudEvents.HEALTH:
        if (data.message != "") {
          // f"{player.name}|{str(player.hitpoints)}/{str(player.max_hitpoints)}|R"
          const values = data.message.split('|');
          const num_items = values.length;
          console.log("num items: " + num_items);
          name = values[0]; // player.name
          const hitpoints = parseInt(values[1].split('/')[0]);
          console.log("hitpoints: " + hitpoints);
          const max_hitpoints = parseInt(values[1].split('/')[1]);
          console.log("max_hitpoints: " + max_hitpoints);
          let cssClass = 'good';
          if (hitpoints / max_hitpoints >= .75) {
            cssClass = 'status-good ';
          } else if (hitpoints / max_hitpoints >= .25) {
            cssClass = 'status-dicey;'; // burnt orange
          } else {
            cssClass = 'status-danger';
          }

          // statuses
          let statuses = "";
          if (num_items > 2) {
            statuses = values[2];
            if (statuses == 'REST') {
              statuses = 'Resting'
            }
          } else {
            statuses = ""; // no status effects present such as resting
          }

          // add the health
          this.health = "<span style=\"class: " + cssClass + ";\">" + hitpoints + "</span> / " + max_hitpoints;

          // add status effects
          if (data.is_resting) {
            this.resting = true;
          }
        }
        break;
      case MudEvents.HELP:
        this.launchHelp(data.help_commands);
        break;
      case MudEvents.REST:
        if (data.message != "") {
          if (data.is_resting) {
            this.resting = true;
            this.restSelected = true;
          } else {
            this.resting = false;
            this.restSelected = false;
          }
          this.mudEvents += "<br><span class=\"rest-message\">" + data.message + "</span>";
        }
        this.resting = data.is_resting
        break;
      case MudEvents.ROOM:
        this.room_description = data.description;
        if (data.name != "") {
          this.mudEvents += "<br><span class=\"room-message\">" + this.addBorder(data.name) + "</span>";
        }

        // check if there's a room descrption
        if (data.description != "") {
          data.description = this.colorizeMessage(this.addBar(data.description));
          this.mudEvents += "<br><span class=\"room-description-message\">" + data.description + "</span>";
        }

        // check for people
        if (data.people != "") {
          this.mudEvents += "<br><span class=\"people1-message\">People: </span><span class=\"people2-message\">" + data.people + "</span>";
        }

        // check for monsters
        if (data.npcs != "") {
          this.mudEvents += "<br><span class=\"npcs1-message\">" + data.npcs + "</span>";
        }


        // check for monsters
        if (data.monsters != "") {
          this.mudEvents += "<br><span class=\"monster1-message\">Monsters: </span><span class=\"monster2-message\">" + data.monsters + "</span>";
        }

        // check for items
        if (data.items != "") {
          this.mudEvents += "<br><span class=\"items1-message\">You see: </span><span class=\"items2-message\">" + data.items + "</span>";
        }

        // check for available exits
        if (data.exits != "") {
          this.mudEvents += "<br><span class=\"exits1-message\">Exits: </span><span class=\"exits2-message\">" + data.exits + "</span>";
        }
        break;
      case MudEvents.CLIENT_LIST:
        console.log("Inside get_clients switch");
        this.usersConnected = data.players;
        break;
      case MudEvents.MAP_EVENT:
        this.mapImageName = data.map_image_name;
        this.mapImageAvailable = true;
        this.miniMap = `https://api.nehsa.net/${this.mapImageName}_small.svg`;
        //this.launchMap(this.mapName);
        break;
      case MudEvents.ROOM_IMAGE:
        this.roomImageName = `https://api.nehsa.net/rooms/${data.room_image_name}`;
        this.roomImageAvailable = true;
        //this.launchMap(this.mapName);
        break;
      case MudEvents.DIRECTION:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"direction-message\">" + data.message + "</span>";
        }
        break;
      case MudEvents.ENVIRONMENT:
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"environment-message\">" + data.message + "</span>";
        }
        break;
      default:
        console.error("unsupported event: " + data.type.toString());
        break;
    }
    return this.mudEvents;
  }

  trimHtml() {
    this.mudEvents = this.mudEvents + "";
    const lines = this.mudEvents.split('<br>');
    if (lines.length > 100) {
      this.mudEvents = lines.slice(Math.max(lines.length - 100, 0)).join('<br>')
    }
  }

  isOpen(ws: WebSocket) { return ws.readyState === ws.OPEN }

  refocus(div: HTMLInputElement) {
    div.focus();
  }

  sendKeyCommand(key: KeyboardEvent) {
    if (key.key !== "Enter") {
      return;
    }
    let command = this.command.trim();
    return this._sendCommand(command);
  }

  sendCommand(command: string) {
    command = command.trim();
    if (command === "") {
      return;
    }
    return this._sendCommand(command);
  }

  _sendCommand(cmd: string, extra: string = "") {
    if (this.isOpen(this.socket)) {
      let commands = cmd.split(" ");
      if (commands.length === 3 && commands[0].toLowerCase() === "system" && commands[1].toLowerCase() === "name") {
        extra = this.userService.name;
      }
      var full_cmd = {
        "type": MudEvents.COMMAND,
        "cmd": cmd,
        "extra": {
          "name": this.userService.name
        }
      };
      console.log("Sending: " + this.command);
      console.log(full_cmd);
      this.socket.send(JSON.stringify(full_cmd));

      // clear command
      this.command = "";
    } else {
      console.log("Websocket is closed..");
    }
  }

  openFullScreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  cancelFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  fullscreen() {
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen) {
      this.openFullScreen();
    } else {
      this.cancelFullScreen();
    }
  }
}

