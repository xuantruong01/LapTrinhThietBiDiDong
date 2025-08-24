"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
        this.createdAt = new Date();
    }
    getBalance() {
        return this.balance;
    }
    setBalance(newBalance) {
        this.balance = newBalance;
    }
}
exports.Account = Account;
