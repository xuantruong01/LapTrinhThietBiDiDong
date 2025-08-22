import {Person} from "./Bai01"
import {Student} from "./Bai02"
import { Car } from "./Bai03";
import { BankAccount } from "./Bai05";
import { Rectangle } from "./Bai04";
import { Book } from "./Bai06";

// Bài 01
const person = new Person("Xuân Trường", 21);
console.log("Tôi là: " + person.name + " " + person.age + " tuổi")


// Bài 02   
const student = new Student(person.name , person.age, "DHKTPM18CTT")
student.displayAllinfor();

// Bài 03
const car = new Car("BMW", "sport" , 2025);
car.showCarInfo();

// Bài 04
const rectangle = new Rectangle(5, 10);
console.log("Area: " + rectangle.calcArea())
console.log("Premiter: " + rectangle.calcPerimeter());

// Bài 05
const bankAccount = new BankAccount(500)
const amount = 100;

console.log("After deposit: "+ bankAccount.deposit(amount));
console.log("After withdraw: "+ bankAccount.withdraw(amount));

//Bài 06
const book = new Book("Đắc nhân tâm","Dale Carnegie", 1936)
console.log(book);




