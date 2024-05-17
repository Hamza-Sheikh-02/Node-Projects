#! /usr/bin/env node
import inquirer from "inquirer";
class player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your Name:",
    transformer: (input) => {
        return input;
    },
});
console.log(answer.name);
let Opponent = await inquirer.prompt({
    name: "opp",
    type: "list",
    message: "Select your Opponent :",
    choices: ["Skeleton", "Zombie"],
});
let p1 = new player(answer.name);
let o1 = new opponent(Opponent.opp);
do {
    if (Opponent.opp === "Skeleton") {
        let select = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select your Opponent :",
            choices: ["Attack", "Drink Portion", "Run for your life..."],
        });
        if (select.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (p1.health <= 0) {
                    console.log("You Loose , Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.healthDecrease();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (o1.health <= 0) {
                    console.log("Congratulations You Win !");
                    process.exit();
                }
            }
        }
        if (select.option === "Drink Portion") {
            p1.healthIncrease();
            console.log(`You Drink Health Portion your health is ${p1.health}`);
        }
        if (select.option === "Run for your life...") {
            console.log("You Loose , Better Luck Next Time !");
            process.exit();
        }
    }
    if (Opponent.opp === "Zombie") {
        let select = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select your Opponent :",
            choices: ["Attack", "Drink Portion", "Run for your life..."],
        });
        if (select.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (p1.health <= 0) {
                    console.log("You Loose , Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.healthDecrease();
                console.log(`${p1.name} health is ${p1.health}`);
                console.log(`${o1.name} health is ${o1.health}`);
                if (o1.health <= 0) {
                    console.log("Congratulations You Win !");
                    process.exit();
                }
            }
        }
        if (select.option === "Drink Portion") {
            p1.healthIncrease();
            console.log(`You Drink Health Portion your health is ${p1.health}`);
        }
        if (select.option === "Run for your life...") {
            console.log("You Lose , Better Luck Next Time!");
            process.exit();
        }
    }
} while (true);
