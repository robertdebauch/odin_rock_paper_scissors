function theGame() {

    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector("#scissors");

    const humanOptions = [rock, paper, scissors];
    const computerOptions = ['rock', 'paper', 'scissors'];

    const humanCurrentScore = document.querySelector('#human-score');
    const compCurrentScore = document.querySelector('#computer-score');

    const result = document.querySelector('#result');
    const resultInfo = document.querySelector('#result-info');
    const resultMain = document.querySelector('#result-main');

    function getComputerChoice(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        console.log(computerOptions[randomIndex]);
        return computerOptions[randomIndex];
    }

    // function for choosing actions
    function chooseAction(event) {
        playGame(event.target.id, getComputerChoice(computerOptions));
    }

    humanOptions.forEach((option) => {
        option.addEventListener('click', chooseAction);
    });


    function playGame(humanSelection, computerSelection) {

        if (humanSelection === "rock" && computerSelection === "paper") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#ff9c9c';
            resultMain.textContent = `You lose! ${computerSelection} beats ${humanSelection}!`;

            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#80e48d';
            resultMain.textContent = `You win! ${humanSelection} beats ${computerSelection}!`;

            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "paper" && computerSelection === "rock") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#80e48d';
            resultMain.textContent = `You win! ${humanSelection} beats ${computerSelection}!`;

            humanScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#ff9c9c';
            resultMain.textContent = `You lose! ${computerSelection} beats ${humanSelection}!`;

            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "scissors" && computerSelection === "rock") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#ff9c9c';
            resultMain.textContent = `You lose! ${computerSelection} beats ${humanSelection}!`;

            computerScore += 1;
            humanCurrentScore.textContent = 'Human: ' + humanScore;
            compCurrentScore.textContent = 'Computer: ' + computerScore;

        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

            resultMain.style.backgroundColor = '#80e48d';
            resultMain.textContent = `You win! ${humanSelection} beats ${computerSelection}!`;

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
                option.removeEventListener('click', chooseAction);
            });

            if (humanScore >= 5) {
                humanWonStyle();

            } else if (computerScore >= 5) {
                computerWonStyle();
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

    function humanWonStyle() {
        resultInfo.textContent = `The Game is Over! Press refresh to play again!`;

        resultMain.style.backgroundColor = '#38b148';
        result.style.backgroundColor = '#38b148';
        resultMain.textContent = `Human won!`;
    }

    function computerWonStyle() {
        resultInfo.textContent = `The Game is Over! Press refresh to play again!`;

        resultMain.style.backgroundColor = '#ff6161';
        result.style.backgroundColor = '#ff6161';
        resultMain.textContent = `Computer won!`;
    }

}
theGame();