import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()

export class MudService {
    @Output() fullScreenEvent = new EventEmitter<boolean>();
    public fullscreen = new EventEmitter<boolean>();
    private _fullscreen = false;
    constructor() {
        console.log("MudService constructor");
    }

    toggle_fullscreen() {
        this._fullscreen == true ? this._fullscreen = false : this._fullscreen = true;        
        this.fullScreenEvent.emit(this._fullscreen);
    }
}