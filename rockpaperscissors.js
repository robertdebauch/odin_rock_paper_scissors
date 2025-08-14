function theGame() {

    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector("#scissors");
    const humanOptions = [rock, paper, scissors];
    // const computerOptions = ['rock', 'paper', 'scissors']; // doesn't work yet!

    function handleClick(event) {
        playGame(event.target.id, getComputerChoice());
        console.log(event.target.id);
    }

    humanOptions.forEach((option) => {
        option.addEventListener('click', handleClick);
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


    // game logic
    function playGame(humanSelection, computerSelection) {
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

        // remove event listener from buttons when one of the player have 5 points
        if (humanScore >= 5 || computerScore >= 5) {
            humanOptions.forEach((option) => {
                option.removeEventListener('click', handleClick);
            });
            // show winner
            if (humanScore > computerScore && humanScore >= 5) {
                console.log('Human won!');
            } else if (computerScore > humanScore && computerScore >= 5) {
                console.log('Computer won!');
            } else if (computerScore === humanScore) {
                if (computerScore > 0 || humanScore > 0) {
                    console.log("It's a tie! Friendship won!");
                } else {
                    console.log('start of the game')
                }
            }
        }


    }

    // playRound(humanSelection, computerSelection);





    const refresh = document.createElement('button');
    refresh.textContent = '↻';
    refresh.classList.add('refresh');
    document.body.appendChild(refresh);
    refresh.addEventListener('click', () => {
        location.reload();
    });

}
theGame();