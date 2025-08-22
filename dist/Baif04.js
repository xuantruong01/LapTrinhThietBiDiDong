"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
    calcPerimeter() {
        return 2 * (this.height + this.width);
    }
}
exports.Rectangle = Rectangle;
