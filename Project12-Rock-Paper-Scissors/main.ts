import inquirer from "inquirer";
import chalk from "chalk";

const userChoice = await inquirer.prompt({
  name: "choice",
  type: "list",
  choices: ["Rock", "Paper", "Scissors"],
  message: chalk.blue("Your Choice:"),
});

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber: number | string = generateRandomNumber(1, 3);

randomNumber === 1
  ? (randomNumber = "Rock")
  : randomNumber === 2
  ? (randomNumber = "Paper")
  : (randomNumber = "Scissors");

console.log(chalk.yellow(`Computer's Choice: ${randomNumber}`));

if (userChoice.choice === randomNumber) {
  console.log(chalk.gray("It's a tie!"));
} else if (
  (userChoice.choice === "Rock" && randomNumber === "Scissors") ||
  (userChoice.choice === "Paper" && randomNumber === "Rock") ||
  (userChoice.choice === "Scissors" && randomNumber === "Paper")
) {
  console.log(chalk.green("You win!"));
} else {
  console.log(chalk.red("You lose!"));
}
