import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from '../../shared-components/comment/comment.component';
import { MudEvent } from '../../types/mudevent.type';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mud',
  standalone: true,
  imports: [MatCardModule, CommentComponent, NgIf, MatButton, MatInputModule, MatFormFieldModule, MatLabel, MatError, FormsModule],
  templateUrl: './mud.component.html',
  styleUrl: './mud.component.scss'
})
export class MudComponent {
  mudEvents: string = "";
  playerName: string = "";
  usersConnected: number = 0;
  health: string = "";
  status: string = "";
  command: string = "";
  socket: WebSocket;
  fullAddress: string = "";
  constructor() {
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

      // scroll to the bottom

    });
  }

  processCommand(data: MudEvent) {
    switch (data.type) {
      case 'request_hostname':
        console.log("Inside request_hostname switch");
        var names = ['Ambrose', 'Crossen', 'Dunstan', 'Bink', 'Ivar', 'Beatrice', 'Subaru', 'Roswaal', 'Ashen', 'Sigrid', 'Renkath', 'Kelsek', 'Ash', 'Jay', 'Bob', 'Fred', 'Mike', 'James', 'Jones', 'Tim', 'Timmy', 'John', 'Jack', 'May', 'Sally', 'Candie', 'Jesse', 'Ethan']
        var name = names[Math.floor(Math.random() * names.length)];
        var resp = '{"type": "hostname_answer", "host": "' + name + '"}';
        console.log("Server is requesting our name, sending back: " + resp);
        this.socket.send(resp);
        break;
      case 'event': // check if there's an event # breeze, silence, rain
        if (data.message != "") {
          this.mudEvents += "<br><span style=\"color: yellow;\">" + data.message + "</span>";
        }
        break;
      case 'info':
        if (data.message != "") {
          this.mudEvents += "<br><span style=\"color: darksalmon;\">" + data.message + "</span>";
        }
        break;
      case 'time':
        if (data.message != "") {
          this.mudEvents += "<br><span style=\"color: #cccccc; font-size: small\">[" + data.message + "]</span>";
        }
        break;
      case 'command':
        if (data.message != "") {
          this.mudEvents += "<br><span style=\"color: #F9F5EC;\">" + data.message + "</span>";
        }
        break;
      case 'you_attack':
        if (data.message != "") {
          this.mudEvents += "<br><span style=\"color: #98FB98;\">" + data.message + "</span>";
        }
        break;
      case 'error':
        if (data.message != "") {
          this.mudEvents += "<br><span style=\"color: red;\">" + data.message + "</span>";
        }
        break;
      case 'attack':
        if (data.message != "") {
          const attack_txt = data.message.split('! ')
          this.mudEvents += "<br><span style=\"color: red;\">" + attack_txt[0] + "!</span><br><span style=\"font-size: 1rem; vertical-align: super; color: #cccccc;\">" + attack_txt[1] + "</span>";
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
          let color = 'green';
          if (hitpoints / max_hitpoints >= .75) {
            color = 'green';
          } else if (hitpoints / max_hitpoints >= .25) {
            color = '#FF7034;'; // burnt orange
          } else {
            color = 'red';
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

          // add the player name
          this.playerName = name;

          // add the health
          this.health = "Health: <span style=\"color: " + color + ";\">" + hitpoints + "</span> / " + max_hitpoints;

          // add status effects
          this.status = "Status: Resting";
        }
        break;
      case 'room':
        if (data.name != "") {
          this.mudEvents += "<br><span style=\"color: green; text-weight: bold;\">" + data.name + "</span>";
        }

        // check if there's a room descrption
        if (data.description != "") {
          this.mudEvents += "<br><span style=\"color: #F9F5EC;\">" + data.description + "</span>";
        }

        // check for people
        if (data.people != "") {
          this.mudEvents += "<br><span style=\"color: #F9F5EC;\">People: </span><span style=\"color: cornflowerblue;\">" + data.people + "</span>";
        }

        // check for monsters
        if (data.monsters != "") {
          this.mudEvents += "<br><span style=\"color: #F9F5EC;\">Monsters: </span><span style=\"color: red;\">" + data.monsters + "</span>";
        }

        // check for items
        if (data.items != "") {
          this.mudEvents += "<br><span style=\"color: #F9F5EC;\">You see </span><span style=\"color: green;\">" + data.items + "</span>";
        }

        // check for available exits
        if (data.exits != "") {
          this.mudEvents += "<br><span style=\"color: #F9F5EC;\">Available exits: </span><span style=\"color: green;\">" + data.exits + "</span>";
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

  sendCommand(key: KeyboardEvent) {
    if (key.key !== "Enter") {
      return;
    }
    if (this.isOpen(this.socket)) {
      var full_cmd = {
        "type": "cmd",
        "cmd": this.command
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

