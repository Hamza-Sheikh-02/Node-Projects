#! /usr/bin/env node.

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

console.log("\tWELCOME TO MY COUNTDOWN TIMER PROJECT\n");

const response = await inquirer.prompt({
    name: "user_input",
    type: "number",
    message: "Please enter the amount of second under 60:",
    transformer: (input) => {
        return input;
    },
    validate: (input) => {
        if (isNaN(input)) {
        return "Please enter Validate number !";
        } else if (input > 60) {
        return "Seconds must be in 60";
        } else {
        return true;
        }
    },
});
let result = response.user_input;

function startTime(val: number) {
    const iniTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervTime = new Date(iniTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervTime, currentTime);
        if (timeDiff <= 0) {
        console.log("Timer Has Expired!");
        process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600); //minutes
        const sec = Math.floor(timeDiff % 60); //seconds
        console.log(
        `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
        );
    }, 1000);
}
startTime(result);
