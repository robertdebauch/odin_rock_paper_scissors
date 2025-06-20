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

function getHumanChoice(choice) {
    let answer = prompt("rock, paper or scissors?").toLowerCase();
    if (answer === 'rock') {
        return choice = 'rock';
    } else if (answer === 'paper') {
        return choice = 'paper';
    } else if (answer === 'scissors') {
        return choice = 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanSelection;
    computerChoice = computerSelection;
    if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore += 1;
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors!");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock!");
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beats Paper!");
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats Scissors!");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper!");
    } else {
        console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);

// Step 2 pseudocode
// A function is created for the computer's response
// A random number is generated inside the function
// The generated number is checked for conditions
// If is compared with a predefined range of values
// Each range corresponds to a 'string' value for the computer's response
// If the generated number matches a certain range, it is outputed as 'return value'
// The check if performed step-by-step until the comparison conditions are met.

// Step 3 pseudocode
// The function is created to receive a response from the user (human player)
// The function shows a pop-up window with a form for entering a response
// The user enters a response
// The user confirms the input
// The function accepts the response and saves it
// The function returns the response

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

// Step 6
// Players start the game. The game consists of 5 rounds.
// Players start the first round.
// Players choose their moves.
// The winner of the first round gest 1 point, the loser gets 0. A tie gives 0 to both.
// After the first round is over, the games goes to the second round.
// The rules of the second round is the same as in the first.
// Then three more rounds are played according to the same rules.
// The games takes into account the current round number.
// If the round number is less than or equal to 5 (index 4), then the game continues.
// if the round numbers is greater then 5, the games ends and a winner is declared.
// If human has at least 1 point more than the computer, then he wins. The message indicates this.
// If computer has at least 1 point more than the human, then he wins.The message indicates this.
// If there is no winner, then a tie is declared. The message indicates this.
