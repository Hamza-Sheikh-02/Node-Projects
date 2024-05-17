#! /usr/bin/env node.

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.italic.bold.red(
    "\tQUIZ START"
  )
);

const Quiz: {
  myname: string;
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "myname",
    type: "string",
    message: "Enter your Name ?",
  },
  {
    name: "question_1",
    type: "list",
    message: "What is TypeScript primarily used for?",
    choices: [
      "A. Memory Management",
      "B. Dynamic Typing",
      "C. Static Typing",
      "D. Asynchronous operations"
    ],
  },
  {
    name: "question_2",
    type: "list",
    message: "Which of the following is NOT a valid TypeScript data type?",
    choices: ["A. Void", "B. Any", "C. Dynamic", "D. Tuple"],
  },
  {
    name: "question_3",
    type: "list",
    message: "How do you denote a variable as readonly in TypeScript?",
    choices: ["A. const", "B. static", "C. readonly", "D. fixed"],
  },
  {
    name: "question_4",
    type: "list",
    message: "How do you specify that a function does not return anything in TypeScript?",
    choices: [
      "A. function myFunc(): undefined",
      "B. function myFunc(): void",
      "C. function myFunc(): null",
      "D. function myFunc(): None]"
    ]
  },
  {
    name: "question_5",
    type: "list",
    message:
      "How do you define a custom type in TypeScript?",
    choices: [
      "A. interface",
      "B. typedef",
      "C. type",
      "D. Both A and C"
    ],
  },
])

let score: number = 0;

switch (Quiz.question_1) {
  case "C. Static Typing":
    console.log(chalk.italic.greenBright("1. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("1. Incorrect!"));
}

switch (Quiz.question_2) {
  case "C. Dynamic":
    console.log(chalk.italic.greenBright("2. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("2. Incorrect!"));
}

switch (Quiz.question_3) {
  case "C. readonly":
    console.log(chalk.italic.greenBright("3. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("3. Incorrect!"));
}

switch (Quiz.question_4) {
  case "B. function myFunc(): void":
    console.log(chalk.italic.greenBright("4. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("4. Incorrect!"));
}

switch (Quiz.question_5) {
  case "D. Both A and C":
    console.log(chalk.italic.greenBright("5. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("5. Incorrect!"));
}

console.log(
  chalk.italic.blue(
    `\n\t  ${chalk.bold.magenta(Quiz.myname)}: Score ${chalk.bold.magenta(
      score
    )} out of ${chalk.bold.magenta(5)}`
  )
);
