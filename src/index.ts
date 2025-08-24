import {Person} from "./Bai01"
import {Student} from "./Bai02"
import { Car } from "./Bai03";
import { BankAccount } from "./Bai05";
import { Rectangle } from "./Bai04";
import { Book } from "./Bai06";
import { User } from "./Bai07";
import { Product } from "./Bai08";
import { Animal, Cat } from "./Bai09";
import { Account } from "./Bai10";
import { Animal1, Cats, Dog } from "./Bai11";
import { Bird, Fish } from "./Bai12";
import { Circle, Square } from "./Bai13";

// Bài 01
console.log("--------Bài 01--------")
const person = new Person("Xuân Trường", 21);
console.log("Tôi là: " + person.name + " " + person.age + " tuổi")


// Bài 02   
console.log("--------Bài 02--------")
const student = new Student(person.name , person.age, "DHKTPM18CTT")
student.displayAllinfor();

// Bài 03
console.log("--------Bài 03--------")
const car = new Car("BMW", "sport" , 2025);
car.showCarInfo();

// Bài 04
console.log("--------Bài 04--------")
const rectangle = new Rectangle(5, 10);
console.log("Area: " + rectangle.calcArea())
console.log("Premiter: " + rectangle.calcPerimeter());

// Bài 05
console.log("--------Bài 05--------")
const bankAccount = new BankAccount(500)
const amount = 100;

console.log("After deposit: "+ bankAccount.deposit(amount));
console.log("After withdraw: "+ bankAccount.withdraw(amount));

//Bài 06
console.log("--------Bài 06--------")
const book = new Book("Đắc nhân tâm","Dale Carnegie", 1936)
console.log(book);

//Bài 07
console.log("--------Bài 07--------")
const user = new User("Trường");
console.log(user.getName());
user.setName("Sơn");
console.log(user.getName());

//Bài 08
console.log("--------Bài 08--------")
const arrProducts: Product[] = [
    new Product("Sản phẩm 1", 40),
    new Product("Sản phẩm 1", 60),
    new Product("Sản phẩm 1", 100),
    new Product("Sản phẩm 1", 120),
    new Product("Sản phẩm 1", 140),
]

console.log(arrProducts.filter(product => product.price > 100));

//Bài 09
console.log("--------Bài 09--------")
const animal: Animal = new Cat("Tom");
animal.sound();
//Bài 10
console.log("--------Bài 10--------")
const account = new Account(1, 1000);
console.log(account.getBalance());
account.setBalance(2000);
console.log(account);


//Bài 11
console.log("--------Bài 11--------")
const cat = new Cats("Beo");
cat.meow();
const dog = new Dog("Bum");
dog.bark();
//Bài 12
console.log("--------Bài 12--------")
const bird = new Bird();
const fish = new Fish();
bird.Fly();
fish.Swim();
//Bài 13
console.log("--------Bài 13--------")
const square = new Square(20);
const circle = new Circle(10);
console.log("Area square: " + square.area());
console.log("Area circle: " + circle.area());







