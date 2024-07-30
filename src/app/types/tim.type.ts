export class FranticTim {
    text: string = "";
    speed: number = 100;
    left: boolean = true;

    constructor(text: string, speed: number, left: boolean = true) {
        this.text = text;
        this.speed = speed;
        this.left = left
    }
}