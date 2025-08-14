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
        // console.log(event.target.id);
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
        // console.log(humanSelection);
        // console.log(computerSelection);

        // target p with id="human-score"
        const humanCurrentScore = document.querySelector('#human-score');

        // target p with id="computer-score"
        const compCurrentScore = document.querySelector('#computer-score');


        // target div id="result" 
        const result = document.querySelector('#result');
        // console.log(result);

        if (humanSelection === "rock" && computerSelection === "paper") {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. You lose! Paper beats Rock!`;
            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. You win! Rock beats Scissors!`
            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. You win! Paper beats Rock!`
            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. You lose! Scissors beats Paper!`
            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        } else if (humanSelection === "scissors" && computerSelection === "rock") {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. You lose! Rock beats Scissors!`
            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. You win! Scissors beats Paper!`
            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        } else {
            result.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}. It's a tie!`
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        }

        // console.log("Human score: " + humanScore + " | " + "Computer score: " + computerScore);

        // remove event listener from buttons when one of the player have 5 points
        if (humanScore >= 5 || computerScore >= 5) {
            humanOptions.forEach((option) => {
                option.classList.add('disabled');
                option.removeEventListener('click', handleClick);
            });

            // show winner
            if (humanScore > computerScore && humanScore >= 5) {
                result.textContent = `Human won!`;
                // console.log('Human won!');
            } else if (computerScore > humanScore && computerScore >= 5) {
                result.textContent = `Computer won!`;
                // console.log('Computer won!');
            } else if (computerScore === humanScore) {
                if (computerScore > 0 || humanScore > 0) {
                    result.textContent = `It's a tie! Friendship won!`;
                    // console.log("It's a tie! Friendship won!");
                } 
            }

            refreshButton();
        }
    }

    function refreshButton() {
        const refresh = document.createElement('button');
        refresh.textContent = '↻';
        refresh.classList.add('refresh');
        document.body.appendChild(refresh);
        refresh.addEventListener('click', () => {
        location.reload();
    });
    }
    

}
theGame();