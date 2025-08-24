abstract class Shape {
  abstract  area(): number;

}

export class Square extends Shape {
    constructor(public sideLength: number) {
        super();
    }

    area(): number {
        return this.sideLength * this.sideLength
    }
}

export class Circle extends Shape {
    constructor(public sideLength: number) {
        super();
    }

    area(): number {
        return Math.PI * this.sideLength * this.sideLength
    }
}