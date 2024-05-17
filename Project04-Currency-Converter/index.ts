#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Currency Converter");
console.log("These all currencies are up to date to 07-April-2024!");


const currency: any = {
    United_States_Dollar: 1, // Base Currency
    Euro: 0.92,
    Afghan_Afghani: 71.23,
    Qatari_Riyal: 3.64,
    Saudi_Riyal: 3.75,
    Omani_Rial: 0.38,
    Australian_Dollar: 1.52,
    Indian_Rupee: 83.30,
    Pakistani_Rupee: 277.54,
    Bangladeshi_Taka: 109.60,
    Japanese_Yen: 151.61
}

let answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ['United_States_Dollar', 'Euro', 'Afghan_Afghani', 'Qatari_Riyal', 'Saudi_Riyal', 'Omani_Rial', 'Australian_Dollar', 'Indian_Rupee', 'Pakistani_Rupee', 'Bangladeshi_Taka', 'Japanese_Yen']
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ['United_States_Dollar', 'Euro', 'Afghan_Afghani', 'Qatari_Riyal', 'Saudi_Riyal', 'Omani_Rial', 'Australian_Dollar', 'Indian_Rupee', 'Pakistani_Rupee', 'Bangladeshi_Taka', 'Japanese_Yen']
        },
        {
            name: "amount",
            message: "Enter Your Amount:",
            type: "number",
        }
    ]
)

let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
