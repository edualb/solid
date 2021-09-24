import { Area3D } from "./area3d";

export class Cube implements Area3D {

    constructor(
        private width: number, 
        private height: number,
        private length: number) {}

    surfaceArea(): number {
        let lw = this.length * this.width;
        let hw = this.height * this.width;
        let lh = this.length * this.height;
        return 2 * (lh + hw + lw);
    }

}