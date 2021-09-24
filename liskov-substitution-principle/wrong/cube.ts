import { Area } from "./area";

export class Cube implements Area {

    constructor(
        private width: number, 
        private height: number,
        private length: number) {}

    area2D(): number {
        throw new Error("This shape can not calculate 2 dimensions.");
    }
    area3D(): number {
        let lw = this.length * this.width;
        let hw = this.height * this.width;
        let lh = this.length * this.height;
        return 2 * (lh + hw + lw);
    }

}