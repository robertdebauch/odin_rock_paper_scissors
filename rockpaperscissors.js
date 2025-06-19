// Step 2 pseudocode
// A function is created for the computer's response
// A random number is generated inside the function
// The generated number is checked for conditions
// If is compared with a predefined range of values
// Each range corresponds to a 'string' value for the computer's response
// If the generated number matches a certain range, it is outputed as 'return value'
// The check if performed step-by-step until the comparison conditions are met.

let computerChoice = getComputerChoice();

function getComputerChoice() {
    let answer = Math.random()
    if (answer === 0 || answer <= 0.33) {
        return choice = 'rock';
    } else if (answer >= 0.34 && answer <= 0.66) {
        return choice = 'paper';
    } else {
        // answer >= 0.67 && answer <= 0.99
        return choice = 'scissors';
    }
}

console.log(computerChoice);

// Step 3 pseudocode
// The function is created to receive a response from the user (human player)
// The function shows a pop-up window with a form for entering a response
// The user enters a response
// The user confirms the input
// The function accepts the response and saves it
// The function returns the response

let humanChoice = getHumanChoice();

function getHumanChoice(choice) {
    let answer = prompt("rock, paper or scissors?");
    if (answer === 'rock') {
        return choice = 'rock';
    } else if (answer === 'paper') {
        return choice = 'paper';
    } else if (answer === 'scissors') {
        return choice = 'scissors';
    }
}
console.log(humanChoice);

// Step 4 pseudocode
// We need to store the results of the game.
// To do this, we need to create two variables.
// First variable will store the result of the player.
// Second variable will store the result of the computer.
// These variables should be accessible from everywhere in our code.
// We use global scope for this.
// First we create a variable to store the points scored by the human.
// We then initialize this variable with an initial value of 0.
// Next we create a variable to store the points cored by the computer.
// We then initialize this variable with an initial value of 0.

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);


// Step 5 pseudocode
// We need to play one roudn of the game.
// To do this, we need to create a new function.
// This function will use the player's and the computer's choices as parameters.
// To ensure the acuracy of the result, we need to modify function for user choice.
// It should not be case sensitive.
// After the choices of the player and the compuiter are received, they will be compared inside the function.
// There are nine possible comparison results.
// The winner of the round is determined as a result of the comparison.
// Information about the winner of the round is output with a message.
// The player who wins the round gets +1 points to his score.
// The player who loses the roung gets nothing.
// In case of a tie, neither player gets points.

