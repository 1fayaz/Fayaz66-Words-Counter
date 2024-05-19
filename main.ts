import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.grey("\n \t\t -Word Counter- -Fayaz ALI@66-"));
console.log("=".repeat(60));



let answers = await inquirer.prompt(
    [
        {
            name:"words",
            type:"input",
            message:"Enter any words",
        }
    ]
);

let alphabets = answers.words.trim().split(" ");

console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(alphabets);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(alphabets.length)}`));
console.log("=".repeat(60));



