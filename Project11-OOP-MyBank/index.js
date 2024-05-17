#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Customer {
    firstName;
    lastName;
    age;
    gender;
    phoneNumber;
    accountNumber;
    balance;
    constructor(a, b, c, d, e, f, g) {
        this.firstName = a;
        this.lastName = b;
        this.age = c;
        this.gender = d;
        this.phoneNumber = e;
        this.accountNumber = f;
        this.balance = g;
    }
}
console.log(chalk.italic.bold.red("\tWELCOME MY BANK"));
class myBank {
    customers = [];
    async createAcc() {
        const { firstName, lastName, Age, Gender, mobilenumber, accountNumber, Balance, } = await inquirer.prompt([
            {
                name: "firstName",
                type: "input",
                message: chalk.italic.bold.blueBright("Enter your name :"),
            },
            {
                name: "lastName",
                type: "input",
                message: chalk.italic.bold.blueBright("Enter your lastName :"),
            },
            {
                name: "Age",
                type: "input",
                message: chalk.italic.bold.blueBright("Enter your age :"),
            },
            {
                name: "Gender",
                type: "input",
                message: chalk.italic.bold.blueBright("Enter your Gender :"),
            },
            {
                name: "mobilenumber",
                type: "input",
                message: chalk.italic.bold.blueBright("Enter your mobile Number :"),
            },
            {
                name: "accountNumber",
                type: "input",
                message: chalk.italic.bold.blueBright("Enter your new account number :"),
            },
            {
                name: "Balance",
                type: "input",
                message: chalk.italic.bold.blueBright("Add initial balance :"),
            },
        ]);
        const cus = new Customer(firstName, lastName, Age, Gender, mobilenumber, accountNumber, parseFloat(Balance));
        this.customers.push(cus);
        console.log(chalk.italic.bold.yellow(`\nCongratulations, Mr/s ${cus.firstName} ${cus.lastName} your account has been created successfully.\n`));
    }
    async details() {
        const { AccountNumber } = await inquirer.prompt({
            name: "AccountNumber",
            type: "input",
            message: "Enter your account number:",
        });
        const cus = this.customers.find((x) => x.accountNumber == AccountNumber);
        if (cus) {
            console.log(chalk.italic.bold.greenBright.underline(`Account Details :💰
                Name: ${cus.firstName} ${cus.lastName} 
                Age: ${cus.age}
                Gender: ${cus.gender}
                MobileNo: ${cus.phoneNumber}
                AccountNumber: ${cus.accountNumber}
                Balance: ${cus.balance}`));
        }
        else {
            console.log(chalk.italic.bold.red("Account Not Found !"));
        }
    }
    async debit() {
        const { accountNumber, amount } = await inquirer.prompt([
            {
                type: "input",
                name: "accountNumber",
                message: chalk.bold.greenBright("Enter your account number:"),
            },
            {
                type: "input",
                name: "amount",
                message: chalk.bold.greenBright("Enter amount to debit:"),
            },
        ]);
        const cus = this.customers.find((z) => z.accountNumber === accountNumber);
        if (cus) {
            if (cus.balance >= parseFloat(amount)) {
                cus.balance -= parseFloat(amount);
                console.log(chalk.bold.italic.magenta(`<---- Debited ${amount} from account ${accountNumber}. New balance: ${cus.balance} ---->`));
            }
            else {
                console.log(chalk.bold.red("Insufficient balance"));
            }
        }
        else {
            console.log(chalk.red.bold("Account not found:"));
        }
    }
    async credit() {
        const { accountNumber, amount } = await inquirer.prompt([
            {
                name: "accountNumber",
                type: "input",
                message: "Enter your account Number :",
            },
            {
                name: "amount",
                type: "input",
                message: "Enter amount to credit:",
            },
        ]);
        const cus = this.customers.find((z) => z.accountNumber == accountNumber);
        if (cus) {
            cus.balance += parseFloat(amount);
            console.log(chalk.bold.italic.magenta(`<---- Credited ${amount} to account ${accountNumber}. New balance: ${cus.balance} ---->`));
        }
        else {
            console.log(chalk.italic.bold.red("Account Not Found !"));
        }
    }
    async start() {
        while (true) {
            const { Choices } = await inquirer.prompt({
                name: "Choices",
                type: "list",
                message: "Select an option",
                choices: [
                    "Create Account",
                    "View Account Details",
                    "Debit",
                    "Credit",
                    "Exit",
                ],
            });
            if (Choices === "Create Account") {
                await this.createAcc();
            }
            else if (Choices === "View Account Details") {
                await this.details();
            }
            else if (Choices === "Debit") {
                await this.debit();
            }
            else if (Choices === "Credit") {
                await this.credit();
            }
            else if ("Exit") {
                console.log(chalk.underline.red.italic("Yor are exit..."));
                process.exit();
            }
        }
    }
}
const a = new myBank();
a.start();
