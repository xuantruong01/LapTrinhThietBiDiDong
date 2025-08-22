import {Person} from "./Bai01"


export class Student extends Person {
    grade: string

    constructor(name: string, age: number, grade: string) {
        super(name,age);
        this.grade= grade
    }

    displayAllinfor() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}