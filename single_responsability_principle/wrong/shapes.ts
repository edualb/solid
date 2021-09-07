export class Shapes {

    executeSquare() {
        console.log("Executing Square")
        this.executeTriangle()
    }

    executeStar() {
        console.log("Executing Star")
        this.executeTriangle()
        this.executeSquare()
    }

    executeCircle() {
        console.log("Executing Circle")
        this.executeStar()
        this.executeSquare()
    }
    
    executeTriangle() {
        console.log("Executing Triangle")
    }

}