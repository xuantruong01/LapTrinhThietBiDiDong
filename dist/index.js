"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai01_1 = require("./Bai01");
const Bai02_1 = require("./Bai02");
const Bai03_1 = require("./Bai03");
const Bai05_1 = require("./Bai05");
const Bai04_1 = require("./Bai04");
const Bai06_1 = require("./Bai06");
// Bài 01
const person = new Bai01_1.Person("Xuân Trường", 21);
console.log("Tôi là: " + person.name + " " + person.age + " tuổi");
// Bài 02   
const student = new Bai02_1.Student(person.name, person.age, "DHKTPM18CTT");
student.displayAllinfor();
// Bài 03
const car = new Bai03_1.Car("BMW", "sport", 2025);
car.showCarInfo();
// Bài 04
const rectangle = new Bai04_1.Rectangle(5, 10);
console.log("Area: " + rectangle.calcArea());
console.log("Premiter: " + rectangle.calcPerimeter());
// Bài 05
const bankAccount = new Bai05_1.BankAccount(500);
const amount = 100;
console.log("After deposit: " + bankAccount.deposit(amount));
console.log("After withdraw: " + bankAccount.withdraw(amount));
//Bài 06
const book = new Bai06_1.Book("Đắc nhân tâm", "Dale Carnegie", 1936);
console.log(book);
