#! /usr/bin/env node

import inquirer from "inquirer";

console.log(
  "\t\nWelcome to 'Government Sindh' MUHAMMAD KAMRAN KHAN TESSORI IT Coures program  (Admission Open)\n"
);

const randomNumber: number = Math.floor(10000 + Math.random() * 90000);
let answers = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Student Name: ",
        validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select your course enrolled",
            choices: ["TypeScript", "Nextjs", "JavaScript", "Python", "MsOffice"],
    },
]);
const courseFees: { [key: string]: number } = {
    TypeScript: 1000,
    Nextjs: 2000,
    JavaScript: 3000,
    Python: 4000,
    MsOffice: 1000,
};

console.log(`Course Fees: ${courseFees[answers.courses]}/-`);

let payment_method = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Enter your Payment Mathod",
        choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Please enter a non-empty value.";
        },
    },
]);
console.log(`You select Payment Method ${payment_method.payment}\n`);

const courseFee = courseFees[answers.courses];
const paymentAmount = parseFloat(payment_method.amount);

if (courseFee === paymentAmount) {
    console.log("\tCongratulations, you have purchased this course.\n");
    console.log(`Student Name: ${answers.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answers.courses}`);
} else {
    console.log("invalid amount due to course\n");
}
