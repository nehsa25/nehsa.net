import { MudEvents } from "./mudevents.type";

export class MudEvent {
    type: MudEvents = MudEvents.NONE;
    message: string = "";
    name: string = "";
    description: string = "";
    people: string = "";
    monsters: string = "";
    items: string = "";
    exits: string = "";
    value: string = "";
    extra: string = "";
    map_contents: string = "";
    room_image_name: string = "";
    map_image_name: string = "";
    players: number = -1;
    is_resting: boolean = false;
    world_name: string = "";
    help_commands: HelpEvent = new HelpEvent();
    inventory: InventoryEvent = new InventoryEvent();
}

export class InventoryEvent {
    items = new Array<any>();
    money = 0;
}

export class HelpEvent {
    commands = new Array<any>();
}

export class HelpCommand {
    command: string = "";
    description: string = "";
}