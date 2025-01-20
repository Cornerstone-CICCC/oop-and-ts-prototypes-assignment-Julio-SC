// Constructor para Account
function Account(accountNumber, balance) {
    this._accountNumber = accountNumber;
    this._balance = balance;
}

Account.prototype.deposit = function (amount) {
    this._balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this._balance}`);
};

Account.prototype.withdraw = function (amount) {
    if (amount > this._balance) {
        console.log("Insufficient funds.");
    } else {
        this._balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
    }
};

// Constructor para SavingsAccount
function SavingsAccount(accountNumber, balance, interestRate) {
    Account.call(this, accountNumber, balance); // Llama al constructor padre
    this._interestRate = interestRate; // Nueva propiedad específica de SavingsAccount
}

SavingsAccount.prototype.addInterest = function () {
    const interest = this._balance * this._interestRate;
    this._balance += interest;
    console.log(`Interest added: $${interest}. New balance: $${this._balance}`);
};

// Herencia de Account
Object.setPrototypeOf(SavingsAccount.prototype, Account.prototype);

// Constructor para CheckingAccount
function CheckingAccount(accountNumber, balance) {
    Account.call(this, accountNumber, balance); // Llama al constructor padre
}

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
    if (amount > this._balance) {
        console.log("Check bounced: Insufficient funds.");
    } else {
        this._balance -= amount;
        console.log(`Check processed. Withdrawn $${amount}. New balance: $${this._balance}`);
    }
};

// Herencia de Account
Object.setPrototypeOf(CheckingAccount.prototype, Account.prototype);

// Crear instancias y demostrar funcionalidad

// SavingsAccount
const savings = new SavingsAccount("SA123", 1000, 0.05);
savings.deposit(500);
savings.addInterest();
savings.withdraw(300);

// CheckingAccount
const checking = new CheckingAccount("CA456", 2000);
checking.deposit(1000);
checking.withdrawUsingCheck(2500);
checking.withdrawUsingCheck(1000);
