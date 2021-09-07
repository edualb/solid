import { ShapeAreaCalculator } from "./shapeAreaCalculator";

export class Circle implements ShapeAreaCalculator {

    constructor(private radius: number) {}

    calculateArea(): number {
        return this.radius * this.radius * Math.PI;
    }

}