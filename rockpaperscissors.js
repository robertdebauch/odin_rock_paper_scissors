function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    // let currentRound = 0;

    do {

    // computer choice
    function getComputerChoice() {
        let answer = Math.random()
        if (answer === 0 || answer <= 0.33) {
            return choice = 'rock';
        } else if (answer >= 0.34 && answer <= 0.66) {
            return choice = 'paper';
        } else {
            return choice = 'scissors';
        }
    }

    // human choice
    // function getHumanChoice(choice) {
    //     const rock = document.querySelector('#rock');
    //     const paper = document.querySelector('#paper');
    //     const scissors = document.querySelector("#scissors");
    //     const options = [rock, paper, scissors];
    // }

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

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanSelection;
        computerChoice = computerSelection;
        console.log(humanSelection);
        console.log(computerSelection);
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


        console.log("Human score: " + humanScore + " | " + "Computer score: " + computerScore);
    }

    playRound(humanSelection, computerSelection);
    
    } while (humanScore < 5 && computerScore < 5);

    if (humanScore > computerScore && humanScore >= 5) {
        console.log('Human won!');
    } else if (computerScore > humanScore && computerScore >= 5) {
        console.log('Computer won!');
    } else {
        console.log("It's a tie! Friendship won!");
    }
}

playGame();