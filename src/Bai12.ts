export interface Flyable {
    Fly():void;
}

export interface Swimmable{
    Swim(): void;
}

export class Bird implements Flyable{
    Fly(): void {
        console.log("Chim dang bay");
        
    }
}

export class Fish implements Swimmable {
    Swim(): void {
        console.log("Ca dang boi");
        
    }
}