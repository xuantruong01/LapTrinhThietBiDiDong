"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai01_1 = require("./Bai01");
const Bai02_1 = require("./Bai02");
const Bai03_1 = require("./Bai03");
const Bai05_1 = require("./Bai05");
const Bai04_1 = require("./Bai04");
const Bai06_1 = require("./Bai06");
const Bai07_1 = require("./Bai07");
const Bai08_1 = require("./Bai08");
const Bai09_1 = require("./Bai09");
const Bai10_1 = require("./Bai10");
const Bai11_1 = require("./Bai11");
const Bai12_1 = require("./Bai12");
const Bai13_1 = require("./Bai13");
// Bài 01
console.log("--------Bài 01--------");
const person = new Bai01_1.Person("Xuân Trường", 21);
console.log("Tôi là: " + person.name + " " + person.age + " tuổi");
// Bài 02   
console.log("--------Bài 02--------");
const student = new Bai02_1.Student(person.name, person.age, "DHKTPM18CTT");
student.displayAllinfor();
// Bài 03
console.log("--------Bài 03--------");
const car = new Bai03_1.Car("BMW", "sport", 2025);
car.showCarInfo();
// Bài 04
console.log("--------Bài 04--------");
const rectangle = new Bai04_1.Rectangle(5, 10);
console.log("Area: " + rectangle.calcArea());
console.log("Premiter: " + rectangle.calcPerimeter());
// Bài 05
console.log("--------Bài 05--------");
const bankAccount = new Bai05_1.BankAccount(500);
const amount = 100;
console.log("After deposit: " + bankAccount.deposit(amount));
console.log("After withdraw: " + bankAccount.withdraw(amount));
//Bài 06
console.log("--------Bài 06--------");
const book = new Bai06_1.Book("Đắc nhân tâm", "Dale Carnegie", 1936);
console.log(book);
//Bài 07
console.log("--------Bài 07--------");
const user = new Bai07_1.User("Trường");
console.log(user.getName());
user.setName("Sơn");
console.log(user.getName());
//Bài 08
console.log("--------Bài 08--------");
const arrProducts = [
    new Bai08_1.Product("Sản phẩm 1", 40),
    new Bai08_1.Product("Sản phẩm 1", 60),
    new Bai08_1.Product("Sản phẩm 1", 100),
    new Bai08_1.Product("Sản phẩm 1", 120),
    new Bai08_1.Product("Sản phẩm 1", 140),
];
console.log(arrProducts.filter(product => product.price > 100));
//Bài 09
console.log("--------Bài 09--------");
const animal = new Bai09_1.Cat("Tom");
animal.sound();
//Bài 10
console.log("--------Bài 10--------");
const account = new Bai10_1.Account(1, 1000);
console.log(account.getBalance());
account.setBalance(2000);
console.log(account);
//Bài 11
console.log("--------Bài 11--------");
const cat = new Bai11_1.Cats("Beo");
cat.meow();
const dog = new Bai11_1.Dog("Bum");
dog.bark();
//Bài 12
console.log("--------Bài 12--------");
const bird = new Bai12_1.Bird();
const fish = new Bai12_1.Fish();
bird.Fly();
fish.Swim();
//Bài 13
console.log("--------Bài 13--------");
const square = new Bai13_1.Square(20);
const circle = new Bai13_1.Circle(10);
console.log("Area square: " + square.area());
console.log("Area circle: " + circle.area());
