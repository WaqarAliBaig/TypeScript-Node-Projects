import inquirer from "inquirer";
const systemGeneratedNO = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNO, "sys");
if (userGuess === systemGeneratedNO) {
    console.log("Yes your answer is correct \n You win!");
}
else {
    console.log("Please try again, Better luck next time!");
}
