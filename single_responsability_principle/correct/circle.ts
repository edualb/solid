import { Shape } from "./shape";

export class Circle implements Shape {


    constructor(private star: Shape, private square: Shape) {}

    execute() {
        console.log("Executing Circle")
        this.star.execute();
        this.square.execute();
    }

}