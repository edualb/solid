import { Area } from "./area";

export class Square implements Area {

    constructor(private width: number, private height: number) {}

    area2D(): number {
        return this.height * this.width;
    }
    area3D(): number {
        throw new Error("This shape does not have three dimensions.");
    }

}