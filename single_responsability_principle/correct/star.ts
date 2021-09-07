import { Shape } from "./shape";

export class Star implements Shape {
    
    constructor(private square: Shape, private triangle: Shape) {}

    execute() {
        console.log("Executing Star");
        this.triangle.execute();
        this.square.execute();
    }

}