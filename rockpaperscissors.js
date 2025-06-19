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