"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Cats = exports.Animal1 = void 0;
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} + make the sound`);
    }
}
exports.Animal1 = Animal1;
class Cats extends Animal1 {
    meow() {
        console.log(`${this.name} + meow meow`);
    }
}
exports.Cats = Cats;
class Dog extends Animal1 {
    bark() {
        console.log(`${this.name} + bark bark`);
    }
}
exports.Dog = Dog;
