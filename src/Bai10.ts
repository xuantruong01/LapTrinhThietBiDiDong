export class Account {
    public id: number;
    private balance: number;
    readonly createdAt: Date;

    constructor(id: number, balance: number) {
        this.id = id;
        this.balance = balance;
        this.createdAt = new Date();
    }

    getBalance(): number{
        return this.balance
    }

    setBalance(newBalance: number) {
        this.balance = newBalance;
    }
 }