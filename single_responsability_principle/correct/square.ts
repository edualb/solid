import { Shape } from "./shape";

export class Square implements Shape {

    constructor(private triangle: Shape) {}

    execute() {
        console.log("Executing Square");
        this.triangle.execute();
    }

}