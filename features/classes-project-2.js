// Create BankAccount class
// Allow constructor function to take balance
    // default to 0 if not a number

// Deposit (amount)
    // If num, add to balance and return true, else print error message and return false

// Withdrawal (amount)
    // If num, remove from balance and return balance, else print error message and return false

// PrintBalance() 'Your account balance is <balance>'
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


var account = new BankAccount(100);
account.deposit(100); 
account.withdrawal(10);
account.printBalance();

var account2 = new BankAccount('fdsfdfdf');
account2.deposit('mike');
account2.withdrawal(true);
account2.printBalance();

