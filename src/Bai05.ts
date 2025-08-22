export class BankAccount {
    balance: number

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): number { return this.balance += amount; }
    withdraw(amount: number): number { return this.balance -= amount; }
}