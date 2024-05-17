#! /usr/bin/env node

import inquirer from "inquirer";

class student {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}
class friend {
    name: string;

    constructor(z: string) {
        this.name = z;
    }
}
class person {
    students: student[] = [];
    friends: friend[] = [];

    addStudent(obj1: student) {
        this.students.push(obj1);
    }
    addFriend(obj2: friend) {
        this.friends.push(obj2);
    }
}

let condition = true;
console.log("Welcome!\n");

let newly = new person();

const start = async (per: person) => {
    do {
        const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to talk to ?",
        choices: ["Friends", "Student", "Exit"],
        });
        if (ans.select === "Exit") {
        condition = false;
        console.log("Exit...");
        }
        if (ans.select === "Friends") {
        const qus = await inquirer.prompt({
            name: "question",
            type: "input",
            message: "By which friend do you want to talk ?",
        });
        const result1 = per.friends.find((x) => x.name === qus.question);
        if (!result1) {
            console.log("\tFriend Added successfully !");

            const fr = new friend(qus.question);
            per.addFriend(fr);
            console.log(`Hello I am ${fr.name}!`);
            console.log(per.friends);
        }
        if (result1) {
            console.log(` Repeated name!....`);
            console.log(`Hello I am ${qus.question}!`);
            console.log("How are you !");
        }
        }
        if (ans.select === "Student") {
        const addStu = await inquirer.prompt({
            name: "st",
            type: "input",
            message: "Which student do you want to talk?",
        });
        const result2 = per.students.find((n) => n.name === addStu.st);

        if (!result2) {
            console.log("\t*Student Added Successfully !");

            const stu = new student(addStu.st);
            console.log(`Hello I am ${addStu.st}!`);
            per.addStudent(stu);
            console.log(per.students);
        }
        if (result2) {
            console.log(`Hello I am ${addStu.st}!`);
            console.log(`\n\tStudent Data`);
            console.log(per.students);
        }
        }
    } while (condition);
};

start(newly);
