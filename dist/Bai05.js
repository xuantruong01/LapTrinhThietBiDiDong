"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) { return this.balance += amount; }
    withdraw(amount) { return this.balance -= amount; }
}
exports.BankAccount = BankAccount;
