"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Bai01_1 = require("./Bai01");
class Student extends Bai01_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllinfor() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
exports.Student = Student;
