"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
class Shape {
}
class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }
    area() {
        return this.sideLength * this.sideLength;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }
    area() {
        return Math.PI * this.sideLength * this.sideLength;
    }
}
exports.Circle = Circle;
