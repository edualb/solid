import { Shape } from "./shape_enum";

export class AreaCalculator {

    width: number
    length: number
    radius: number

    calculate(shape: Shape): number {
        switch (shape) {
            case Shape.Circle:
                return this.radius * this.radius * Math.PI;
            case Shape.Square:
                return this.width * this.length;
            default:
                return 0;
        }
    }

}