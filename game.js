#! /usr/bin/env node
import inquirer from "inquirer";
// *10 will multiply with 
const randonNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt({
    name: "guessAnswer",
    type: "number",
    message: "Enter your number between 1-10 "
});
if (answer.guessAnswer === randonNumber) {
    console.log("Yippeee! you guess the right number");
}
else {
    console.log("sorry you failed");
}
