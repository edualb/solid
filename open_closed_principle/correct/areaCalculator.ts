import { ShapeAreaCalculator } from "./shapeAreaCalculator";

export class AreaCalculator {

    width: number
    length: number
    radius: number

    calculate(shape: ShapeAreaCalculator): number {
        return shape.calculateArea();
    }

}