export class FranticTim {
    text: string = "";
    speed: number = 100;
    text_wait: number = 5000;
    movingRight: boolean = true;
    fromTim: boolean = true;

    constructor(text: string, speed: number, left: boolean, fromTim: boolean, text_wait: number) {
        this.text = text;
        this.text_wait = text_wait;
        this.speed = speed;
        this.movingRight = left
        this.fromTim = fromTim;
    }
}