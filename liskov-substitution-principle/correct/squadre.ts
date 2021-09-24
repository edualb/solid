import { Area2D } from "./area2d";

export class Square implements Area2D {

    constructor(private width: number, private height: number) {}

    area(): number {
        return this.height * this.width;
    }

}