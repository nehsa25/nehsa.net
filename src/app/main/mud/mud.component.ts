import { Component, ElementRef, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MudEvent } from '../../types/mudevent.type';
import { NgFor, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserCreateComponent } from './user-create/user-create.component';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from './map/map.component';
import { MatIcon } from '@angular/material/icon';
import { DupeNameComponent } from './dupe-name/dupe-name.component';

@Component({
  selector: 'app-mud',
  standalone: true,
  imports: [MatCardModule, CommentComponent, NgIf, MatButton, MatInputModule, MatFormFieldModule, MatLabel, MatError, FormsModule, NgFor, MatIcon],
  templateUrl: './mud.component.html',
  styleUrl: './mud.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class MudComponent {
  mudEvents: string = "";
  usersConnected: number = 0;
  health: string = "";
  status: string = "";
  command: string = "";
  socket: WebSocket;
  fullAddress: string = "";
  inventory: string[] = [];
  mapMinimized = false;

  constructor(
    public userService: UserService,
    public dupeDialog: MatDialog,
    public usernameCreateDialog: MatDialog,
    public mapDialog: MatDialog
  ) {
    const host = "api.nehsa.net";
    const port = 60049;
    this.fullAddress = `wss://${host}:${port}`;
    this.socket = new WebSocket(this.fullAddress);
  }

  ngOnInit() {
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
      this.processCommand(data)
    });
  }

  /** Adds a border around the string */
  addBorder(message: string) {
    var desc = "";
    const descriptionLength = message.length;
    if (descriptionLength < 160) {
      for (var i = 0; i < descriptionLength + 2; i++) {
        desc += '-';
      }
    } else {
      desc += "---------------------------------------------------------------------------------------------------------------------------------------------------------------";
    }
    return `${desc}<br>|${message}|<br>${desc}`
  }

  /** Adds a bar under the string */
  addBar(message: string) {
    var desc = "";
    const descriptionLength = message.length;
    if (descriptionLength < 160) {
      for (var i = 0; i < descriptionLength; i++) {
        desc += '-';
      }
    } else {
      desc += "---------------------------------------------------------------------------------------------------------------------------------------------------------------";
    }
    return `${message}<br>${desc}`
  }

  launchDupe() {
    const dialogRef = this.dupeDialog.open(DupeNameComponent, {
      data: {
        name: this.userService.name
      },
      width: '400px',
      height: '175px',
    });
    dialogRef.componentInstance.emitService.subscribe((val: any) => {
      this.userService.name = val;
      var resp = '{"type": "hostname_answer", "host": "' + val + '"}';
      console.log("Server is requesting our name, sending back: " + resp);
      this.socket.send(resp);
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  launchMap() {
    const dialogRef = this.mapDialog.open(MapComponent, {
      data: {
        name: this.userService.name
      },
      width: '400px',
      height: '400px',
      position: { top: '50px', right: '200px' }
    });
    dialogRef.componentInstance.emitService.subscribe((val: any) => {
      if (val == 'min') {
        this.mapMinimized = true;
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
      this.mapMinimized = true;
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
    let colors: string[] = ["red", "green", "blue", "white", "yellow", "cyan", "magenta", "black", "gray", "grey",
      "orange", "purple", "brown", "pink", "teal", "maroon", "olive", "navy",
      "lime", "aqua", "silver", "black", "gray", "grey", "orange",
      "purple", "brown", "pink", "teal", "maroon", "olive", "navy", "lime", "aqua", "silver"];
    colors.forEach(o => {
      const findval = o;
      let replaceValue = o;
      if (o == "black" || o == "gray" || o == "grey") {
        replaceValue = "#999";
      }
      const findExpression = new RegExp(`\\s(${o})\\s|\\s(${o}(?=\\S*['-])([a-zA-Z'-]+))`, 'gi');
      const PreventDupeExpression = new RegExp(`<span class=\"color-${findExpression}\">(.*)</span><span class=\"color-${findExpression}\">(.*)</span>`, 'gi');
      message = message.replace(findExpression, r => "<span class=\"color-" + replaceValue + "\">" + r + "</span>");
      message = message.replace(PreventDupeExpression, r => "<span class=\"color-" + replaceValue + "\">" + r + "</span>");
    });
    return message;
  }

  processCommand(data: MudEvent) {
    switch (data.type) {
      case 'welcome':
        let welcome = "This is NehsaMUD.  Welcome to the world of Illisurom.<br><br>It's a project Ethan, my son, and I are working on (and you if you want!).  It's a fun way to learn Python while doing something creative.  It's an homage to one of the funnest, most underrated types of game ever invented - <span class=\"important\">text-based multi-user dungeons (MUDs).</span>  MUDs were hard, they required skill, they were fast and cut-throat.  If you died, people took your shit.  They were also highly social and encouraged creatively. Ohh, the day, when my friend Ian figured out how to script following someone in PvP so they couldn't get away! I hope someday people &quot;script&quot; this like MUDs of old.. so I can sneak attack you while you are AFK.<br><br>NehsaMUD in a perpetual state of &quot;mostly broken&quot;. Please adjust your expectations accordingly..<br><br>Have fun!<br>";
        if (data.message != "") {
          this.mudEvents += `<br><span class=\"welcome-message\">${data.message}<br><br>${welcome}</span>`;
        }
        this.launchMap();
        break;
      case 'book':
        console.log("book: " + data.message);
        if (data.message != "") {
          this.mudEvents += `<br><span class=\"book-message\">${data.message.replace("<", "&lt;").replace(">", "&gt;")}</span>`;
        }
        break
      case 'update_name':
        console.log("update name response");
        break;
      case 'request_hostname':
        //this.createUser();
        var name = this.userService.name;
        var resp = '{"type": "hostname_answer", "host": "' + name + '"}';
        console.log("Server is requesting our name, sending back: " + resp);
        this.socket.send(resp);
        break;
      case 'dupe_username':
        this.launchDupe();
        break;
      case 'event': // check if there's an event # breeze, silence, rain
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"event-message\">" + data.message + "</span>";
        }
        break;
      case 'info':
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"info-message\">" + data.message + "</span>";
        }
        break;
      case 'time':
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"time-message\">[" + data.message + "]</span>";
        }
        break;
      case 'changename':
        if (data.message != "") {
          const name = data.extra;
          this.userService.name = name;
          this.userService.about = "";
          this.mudEvents += "<br><span class=\"changename-message\">[SYSTEM " + data.message + "]</span>";
        }
        break;
      case 'command':
        console.log(JSON.parse(data.message).content);
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"input-message\">" + JSON.parse(data.message).content + "</span>";
        }
        break;
      case 'you_attack':
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"you-attack-message\">" + data.message + "</span>";
        }
        break;
      case 'inv':
        var inventoryList = new Array<string>();
        var items = data.message.toString().split(',');
        items.forEach(o => {
          console.log("item: " + o);
          inventoryList.push(o);
        });
        this.inventory = inventoryList;
        break;
      case 'error':
        if (data.message != "") {
          this.mudEvents += "<br><span class=\"error-message\">" + data.message + "</span>";
        }
        break;
      case 'attack':
        if (data.message != "") {
          const attack_txt = data.message.split('! ')
          this.mudEvents += "<br><span class=\"attack1-message\">"
            + attack_txt[0]
            + "!</span><br><span  class=\"attack2-message\">" + attack_txt[1] + "</span>";
        }
        break;
      case 'health':
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
          this.status = "Status: Resting";
        }
        break;
      case 'room':
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
      case 'get_clients':
        console.log("Inside get_clients switch");
        this.usersConnected = Number.parseInt(data.value);
        break;
      default:
        console.error("unsupported event", JSON.stringify(event));
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

  refocus(div: HTMLTextAreaElement) {
    div.focus();
  }

  sendCommand(key: KeyboardEvent) {
    if (key.key !== "Enter") {
      return;
    }
    if (this.isOpen(this.socket)) {
      let cmd = this.command.trim();
      let extra = "";
      let commands = cmd.split(" ");
      if (commands.length === 3 && commands[0].toLowerCase() === "system" && commands[1].toLowerCase() === "name") {
        extra = this.userService.name;
      }
      var full_cmd = {
        "type": "cmd",
        "cmd": cmd.trim(),
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
}

