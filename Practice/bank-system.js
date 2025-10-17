class BankAccount {
    #accountNumber;
    #balance;
    #transactionHistory;

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.#accountNumber = this.#generateAccountNumber();
        this.#balance = initialBalance;
        this.#transactionHistory = [];
        this.#logTransaction('Account opened', initialBalance);
    }

    #generateAccountNumber() {
        return 'ACC' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    #logTransaction(description, amount) {
        this.#transactionHistory.push({
            date: new Date(),
            description,
            amount,
            balance: this.#balance
        });
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
        this.#logTransaction('Deposit', amount);
        console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
        this.#logTransaction('Withdrawal', -amount);
        console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getStatement() {
        return [...this.#transactionHistory]; 
    }
}


const account = new BankAccount('Alice Johnson', 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); 