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
  question_6: string;
  question_7: string;
  question_8: string;
  question_9: string;
  question_10: string;
} = await inquirer.prompt([
  {
    name: "myname",
    type: "string",
    message: "Enter your Name ?",
  },
  {
    name: "question_1",
    type: "list",
    message: "What is typeScript: ",
    choices: [
      "A. A superset of javaScript",
      "B. A statically typed language that compile to plane javaScript",
      "C. A programming language Developed by Microsoft",
      "D. All of the Above",
    ],
  },
  {
    name: "question_2",
    type: "list",
    message: "What command complies TypeScript files in a project:",
    choices: ["A. tsc", "B. compile", "C. ts-compile", "D. typescript"],
  },
  {
    name: "question_3",
    type: "list",
    message: "What is the purpose of using TypeScript over JavaScript :",
    choices: [
      "A. to make code execution faster",
      "B. To enforce Static Typing and catch error at compile time",
      "C. To enable access to browser specific APIs",
      "D. To reduce the need for testing",
    ],
  },
  {
    name: "question_4",
    type: "list",
    message: "Which keyword is used to export elements from a module :",
    choices: ["A. out", "B. export", "C. external", "D. expose"],
  },
  {
    name: "question_5",
    type: "list",
    message:
      "What is the purpose of the Inquirer module in TypeScript application :",
    choices: [
      "A. To handle HTTP requests",
      "B. To create interactive command-line interfaces ",
      "C. To manage dataBase connections",
      "D. To generate documentation",
    ],
  },
  {
    name: "question_6",
    type: "list",
    message:
      "Consider the following Code : \n //module2.ts\n\n export default function greet() {\n console.log('Hello');\n }\nWhich Statement correctly imports the greet function from 'module2.ts'",
    choices: [
      "A. import {greet} from './module2';",
      "B. import greet from './module2';",
      "C. import {greet} from 'module2';",
      "D. import greet from 'module2';",
    ],
  },
  {
    name: "question_7",
    type: "list",
    message: "Which of the following best describes JSON :",
    choices: [
      "A. A data format used exclusively by JavaScript",
      "B. A text based Data format used for storing and transferring data",
      "C. A markup language for creating web Pages",
      "D. A programming language for server-side scripting",
    ],
  },
  {
    name: "question_8",
    type: "list",
    message: "What is the correct Syntax for defining a JSON object :",
    choices: [
      "A. {key:value}",
      "B. {'key':'value'}",
      "C. [key:value]",
      "D. ['key':'value']",
    ],
  },
  {
    name: "question_9",
    type: "list",
    message:
      "What type of assgnment in this variable :\n const fullName:string = 'Dylan Israel';",
    choices: ["A. explicit", "B. implicit", "C. dynamic"],
  },
  {
    name: "question_10",
    type: "list",
    message: "What are the two types of enums :",
    choices: [
      "A. string and Boolean",
      "B. string and number",
      "C. Number and Boolean",
      "D. Number and Number Array",
    ],
  },
]);

let score: number = 0;

switch (Quiz.question_1) {
  case "D. All of the Above":
    console.log(chalk.italic.greenBright("1. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("1. Incorrect !"));
}

switch (Quiz.question_2) {
  case "A. tsc":
    console.log(chalk.italic.greenBright("2. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("2. Incorrect !"));
}

switch (Quiz.question_3) {
  case "B. To enforce Static Typing and catch error at compile time":
    console.log(chalk.italic.greenBright("3. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("3. Incorrect !"));
}

switch (Quiz.question_4) {
  case "B. export":
    console.log(chalk.italic.greenBright("4. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("4. Incorrect !"));
}

switch (Quiz.question_5) {
  case "B. To create interactive command-line interfaces ":
    console.log(chalk.italic.greenBright("5. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("5. Incorrect !"));
}

switch (Quiz.question_6) {
  case "A. import {greet} from './module2';":
    console.log(chalk.italic.greenBright("6. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("6. Incorrect !"));
}

switch (Quiz.question_7) {
  case "B. A text based Data format used for storing and transferring data":
    console.log(chalk.italic.greenBright("7. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("7. Incorrect !"));
}

switch (Quiz.question_8) {
  case "B. {'key':'value'}":
    console.log(chalk.italic.greenBright("8. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("8. Incorrect !"));
}

switch (Quiz.question_9) {
  case "A. explicit":
    console.log(chalk.italic.greenBright("9. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("9. Incorrect !"));
}

switch (Quiz.question_10) {
  case "B. string and number":
    console.log(chalk.italic.greenBright("10. Correct !"));
    ++score;
    break;
  default:
    console.log(chalk.bold.red("10.Incorrect !"));
}
console.log(
  chalk.italic.blue(
    `\n\t  ${chalk.bold.magenta(Quiz.myname)}: Score ${chalk.bold.magenta(
      score
    )} out of ${chalk.bold.magenta(10)}`
  )
);
