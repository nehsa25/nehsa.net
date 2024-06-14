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
    map_name: string = "";
}