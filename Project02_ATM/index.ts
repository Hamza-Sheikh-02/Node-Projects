#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 2019;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin:",
            type: "number"
        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select an option:",
                type: "list",
                choices: ["Withdraw", "Deposit", "Check Balance", "Exit"]
            }
        ]
    );

    if (operationAns.operation === "Withdraw") {
        let withdrawAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter the amount you want to withdraw:",
                    type: "number"
                }
            ]
        );
        if (withdrawAmount.amount <= myBalance) {
            myBalance -= withdrawAmount.amount;
            console.log(`Now your balance is ${myBalance}`);
        }

        else {
            console.log("Insufficient Balance!");
        }
    }
    
    if (operationAns.operation === "Deposit") {
        let depositAmount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter the amount you want to deposit:",
                    type: "number"
                }
            ]
        );
        myBalance += depositAmount.amount;
        console.log(`Your balance is now ${myBalance}`);
    }

    if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }

    if (operationAns.operation === "Exit") {
        console.log("Thank you for using our ATM!");
    }
}

else {
    console.log("Incorrect Pin Code!");
}
