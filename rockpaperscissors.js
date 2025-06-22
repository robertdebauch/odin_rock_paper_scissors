function playGame() {

    alert('Get ready to play the game! Choose one of three options:');

    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 0;

    for (currentRound = 1; currentRound <= 5; currentRound++) {

        if (currentRound === 1) {
            console.log("FIRST ROUND: CHOOSE YOUR MOVE");
        } else if (currentRound === 2) {
            console.log("SECOND ROUND: CHOOSE YOUR MOVE");
        } else if (currentRound === 3) {
            console.log("THIRD ROUND: CHOOSE YOUR MOVE");
        } else if (currentRound === 4) {
            console.log("FOURTH ROUND: CHOOSE YOUR MOVE");
        } else if (currentRound === 5) {
            console.log("FIFTH ROUND: CHOOSE YOUR MOVE");
        }

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

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            humanChoice = humanSelection;
            computerChoice = computerSelection;
            console.log(humanSelection);
            console.log(computerSelection);
            if (humanSelection === "rock" && computerSelection === "paper") {
                console.log("You lose! Paper beats Rock!");
                computerScore += 5;
            } else if (humanSelection === "rock" && computerSelection === "scissors") {
                humanScore += 5;
                console.log("You win! Rock beats Scissors!");
            } else if (humanSelection === "paper" && computerSelection === "rock") {
                humanScore += 5;
                console.log("You win! Paper beats Rock!");
            } else if (humanSelection === "paper" && computerSelection === "scissors") {
                computerScore += 5;
                console.log("You lose! Scissors beats Paper!");
            } else if (humanSelection === "scissors" && computerSelection === "rock") {
                computerScore += 5;
                console.log("You lose! Rock beats Scissors!");
            } else if (humanSelection === "scissors" && computerSelection === "paper") {
                humanScore += 5;
                console.log("You win! Scissors beats Paper!");
            } else {
                console.log("It's a tie!");
            }


            console.log("Human score: " + humanScore + " | " + "Computer score: " + computerScore);
        }

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('Human won!');
    } else if (computerScore > humanScore) {
        console.log('Computer won!');
    } else {
        console.log("It's a tie! Friendship won!");
    }
}

playGame();
