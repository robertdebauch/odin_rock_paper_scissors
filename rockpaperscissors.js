function rockPaperScissors() {

    let humanScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector("#scissors");

    const humanOptions = [rock, paper, scissors];
    const computerOptions = ['rock', 'paper', 'scissors'];

    const humanScoreDisplay = document.querySelector('#human-score');
    const computerScoreDisplay = document.querySelector('#computer-score');

    const result = document.querySelector('#result');
    const resultInfo = document.querySelector('#result-info');
    const resultMain = document.querySelector('#result-main');

    function getComputerChoice(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function chooseAction(event) {
        playGame(event.target.id, getComputerChoice(computerOptions));
    }

    humanOptions.forEach((option) => {
        option.addEventListener('click', chooseAction);
    });


    function playGame(humanSelection, computerSelection) {

        const humanWonRound =
            humanSelection === "rock" && computerSelection === "scissors" ||
            humanSelection === "paper" && computerSelection === "rock" ||
            humanSelection === "scissors" && computerSelection === "paper";

        const computerWonRound =
            humanSelection === "rock" && computerSelection === "paper" ||
            humanSelection === "paper" && computerSelection === "scissors" ||
            humanSelection === "scissors" && computerSelection === "rock";


        function displayRoundResult(winner) {
            if (winner === 'human') {
                resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

                resultMain.style.backgroundColor = '#80e48d';
                resultMain.textContent = `You win! ${humanSelection} beats ${computerSelection}!`;

                humanScore += 1;
            } else if (winner === 'computer') {
                resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

                resultMain.style.backgroundColor = '#ff9c9c';
                resultMain.textContent = `You lose! ${computerSelection} beats ${humanSelection}!`;

                computerScore += 1;
            } else if (winner === 'tie') {
                resultInfo.textContent = `You chose ${humanSelection}, computer chose ${computerSelection}.`;

                resultMain.textContent = `It's a tie!`;
                resultMain.style.backgroundColor = '#f0f0f0';
            }
        }

        function roundResult() {
            if (humanWonRound) {
                displayRoundResult('human');
            } else if (computerWonRound) {
                displayRoundResult('computer');
            } else {
                displayRoundResult('tie');
            }
        }

        roundResult();

        humanScoreDisplay.textContent = 'Human: ' + humanScore;
        computerScoreDisplay.textContent = 'Computer: ' + computerScore;


        if (humanScore >= 5 || computerScore >= 5) {
            humanOptions.forEach((option) => {
                option.classList.add('disabled');
                option.removeEventListener('click', chooseAction);
            });

            if (humanScore >= 5) {
                displayGameResult('human');

            } else if (computerScore >= 5) {
                displayGameResult('computer');
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

    function displayGameResult(winner) {
        resultInfo.textContent = `The Game is Over! Press refresh to play again!`;

        if (winner === 'human') {
            resultMain.style.backgroundColor = '#38b148';
            result.style.backgroundColor = '#38b148';
            resultMain.textContent = `Human won!`;
        } else {
            resultMain.style.backgroundColor = '#ff6161';
            result.style.backgroundColor = '#ff6161';
            resultMain.textContent = `Computer won!`;
        }
    }

}
rockPaperScissors();