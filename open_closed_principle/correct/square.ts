import { ShapeAreaCalculator } from "./shapeAreaCalculator";

export class Square implements ShapeAreaCalculator {

    constructor(private width: number, private length: number) {}

    calculateArea(): number {
        return this.width * this.length
    }
}