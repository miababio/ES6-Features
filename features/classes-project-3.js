class BankAccount {
    constructor(amount) {
        this.balance = typeof amount === 'number'? amount : 0;
    }
    set balance(value) {
        this._balance = value;
        this.balanceUpdatedAt = new Date();;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if(typeof amount === 'number') 
        {
            this.balance += amount;
            return true;
        }
        else 
        {
            console.log(`Error! The amount to be deposited is not a number!`);
            return false;
        }
    }
    withdrawal(amount) {
        if(typeof amount === 'number') 
        {
            this.balance -= amount;
            return this.balance;
        }
        else 
        {
            console.log(`Error! The amount to be withdrawn is not a number!`);
            return false;
        }
    }
    printBalance() {
        console.log(`Your account balance is $${this.balance}`);
        console.log(`Last update at ${this.balanceUpdatedAt}`);
    }
}

class SavingsAccount extends BankAccount {
    deposit(amount) {
        if(super.deposit(amount)) {
            console.log(`Congrats! You just deposited an amount of $${amount}.`);
        }
    }
    withdrawal() {
        console.log(`Sorry! You cannot withdrawal money from a Savings Account.`);
    }
}
//savings account
// override withdrawal to print message that you cant
     // dont remove money
// override deposit to print message saying congrats w/ amount
    // call parent deposit method

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdrawal(25);
savingsAccount.printBalance();
