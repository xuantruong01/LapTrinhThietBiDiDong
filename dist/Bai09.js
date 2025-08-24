"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(this.name + " meo meo");
    }
}
exports.Cat = Cat;
