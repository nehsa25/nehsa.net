import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackService {
    private duration = 5000;
    constructor(public snackBar: MatSnackBar) {
    }
    public openSnackBar(message: string, delayinMS: number){
        this.snackBar.open(message, undefined, { duration: delayinMS, verticalPosition: 'bottom' });
    }
}