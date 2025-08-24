export class Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} + make the sound`);
        
    }
}

export class Cats extends Animal1 {
    meow(): void {
        console.log(`${this.name} + meow meow`);
        
    }
}

export class Dog extends Animal1 {
    bark(): void {
        console.log(`${this.name} + bark bark`);
    }
}