export class Rectangle {
    height: number
    width : number

    constructor(height: number, width : number) {
        this.height = height
        this.width  = width 
    }

    calcArea(): number {
        return this.height * this.width ;
    }

    calcPerimeter(): number {
        return 2*(this.height + this.width )
    }
}