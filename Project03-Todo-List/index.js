#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
function showPrompt() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["Add Todo", "Remove Todo", "Check Todo", "Exit"],
        },
    ])
        .then((answers) => {
        switch (answers.action) {
            case "Add Todo":
                addTodo();
                break;
            case "Remove Todo":
                removeTodo();
                break;
            case "Check Todo":
                checkTodo();
                break;
            case "Exit":
                console.log("Goodbye!");
                process.exit();
                break;
        }
    });
}
function addTodo() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "todo",
            message: "Enter your todo:",
        },
    ])
        .then((answers) => {
        todos.push({ name: answers.todo, done: false });
        console.log("Todo added!");
        showPrompt();
    });
}
function removeTodo() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "todo",
            message: "Select a todo to remove:",
            choices: todos.map((todo, index) => ({
                name: todo.name,
                value: index,
            })),
        },
    ])
        .then((answers) => {
        todos.splice(answers.todo, 1);
        console.log("Todo removed!");
        showPrompt();
    });
}
function checkTodo() {
    console.log("Here are all your todos:");
    todos.forEach((todo) => {
        console.log(`- ${todo.name}`);
    });
    console.log("All todos displayed!");
    showPrompt();
}
showPrompt();
