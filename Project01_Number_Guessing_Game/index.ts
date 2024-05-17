#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-5:",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("You guessed right");
} else {
    console.log("You guessed wrong");
}
