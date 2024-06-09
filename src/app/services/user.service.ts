import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private _name: string = "";
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}