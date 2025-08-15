function theGame() {

    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector("#scissors");
    const humanOptions = [rock, paper, scissors];

    function handleClick(event) {
        playGame(event.target.id, getComputerChoice());
    }

    humanOptions.forEach((option) => {
        option.addEventListener('click', handleClick);
    });


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

    function playGame(humanSelection, computerSelection) {

        const humanCurrentScore = document.querySelector('#human-score');
        const compCurrentScore = document.querySelector('#computer-score');

        const result = document.querySelector('#result');
        const resultInfo = document.querySelector('#result-info');
        const resultMain = document.querySelector('#result-main');

        if (humanSelection === "rock" && computerSelection === "paper") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#ff9c9c';
            resultMain.textContent = `You lose! Paper beats Rock!`;

            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#80e48d';
            resultMain.textContent = `You win! Rock beats Scissors!`;

            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "paper" && computerSelection === "rock") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#80e48d';
            resultMain.textContent = `You win! Paper beats Rock!`;

            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#ff9c9c';
            resultMain.textContent = `You lose! Scissors beats Paper!`;

            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "scissors" && computerSelection === "rock") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#ff9c9c';
            resultMain.textContent = `You lose! Rock beats Scissors!`;

            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#80e48d';
            resultMain.textContent = `You win! Scissors beats Paper!`;

            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.textContent = `It's a tie!`;
            resultMain.style.backgroundColor = '#f0f0f0';
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;
        }

        if (humanScore >= 5 || computerScore >= 5) {
            humanOptions.forEach((option) => {
                option.classList.add('disabled');
                option.removeEventListener('click', handleClick);
            });

            if (humanScore > computerScore && humanScore >= 5) {
                // result.textContent = `The Game is Over! Human won!`;
                resultInfo.textContent = `The Game is Over! Press refresh to play again!`;

                resultMain.style.backgroundColor = '#38b148';
                result.backgroundColor = '#38b148';
                result.setAttribute('style', 'background-color: #38b148;');
                resultMain.textContent = `Human won!`;

            } else if (computerScore > humanScore && computerScore >= 5) {
                // result.textContent = `The Game is Over! Computer won!`;
                resultInfo.textContent = `The Game is Over! Press refresh to play again!`;

                resultMain.style.backgroundColor = '#ff6161';
                result.setAttribute('style', 'background-color: #ff6161;');
                resultMain.textContent = `Computer won!`;
            } 

            refreshButton();
        }
    }

    function refreshButton() {
        const refresh = document.createElement('button');
        refresh.textContent = '↻';
        refresh.classList.add('refresh');
        slogan.textContent = '';
        slogan.setAttribute('style', 'display: flex; justify-content: flex-end; align-items: stretch; flex-grow: 0;')
        slogan.appendChild(refresh);
        refresh.addEventListener('click', () => {
            location.reload();
        });
    }


}
theGame();