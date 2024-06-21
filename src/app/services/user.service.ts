import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NameType } from '../types/name.type';

@Injectable()
export class UserService {
    private _name: string = "";
    private _about: string = "";

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get about(): string {
        return this._about;
    }
    set about(value: string) {
        this._about = value;
    }
}