function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector("#scissors");
    const humanOptions = [rock, paper, scissors];
    computerOptions = ['rock', 'paper', 'scissors'];

    humanOptions.forEach((option) => {
        option.addEventListener('click', () => {
            playRound(option.id, getComputerChoice()); // computer choise can be array in future too
            console.log(option.id);
        });
    });

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

    function playRound(humanSelection, computerSelection) {
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

    // playRound(humanSelection, computerSelection);


    if (humanScore > computerScore && humanScore >= 1) {
        console.log('Human won!');
    } else if (computerScore > humanScore && computerScore >= 1) {
        console.log('Computer won!');
    } else {
        console.log("It's a tie! Friendship won!");
    }

    const refresh = document.createElement('button');
    refresh.textContent = '↻';
    refresh.classList.add('refresh');
    document.body.appendChild(refresh);
    refresh.addEventListener('click', () => {
        location.reload();
    })

}
playGame();