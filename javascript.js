const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let choiceIndex = Math.floor(3 * Math.random());
    return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    let outcome;

    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);
    
    let difference = playerIndex - computerIndex;

    if (difference == 0) {
        outcome = 'You Drew! ' + playerSelection + ' equals ' + computerSelection;
    } else if (difference == -2 || difference == 1) {
        outcome = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        outcome = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }

    return outcome;
}
  
function playGame() {
    let wins = 0;
    let net_score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection;
        let validChoice = false;
 
        while (!validChoice) {
            playerSelection = prompt('Choose: Rock, Paper, or Scissors');
            if (choices.includes(playerSelection)) {
                validChoice = true;
            }
            else {
                console.log('Unknown Answer: ' + playerSelection)
            }
        }

        outcome = playRound(playerSelection, getComputerChoice());
        console.log(outcome);

        if (outcome[4] == 'W') {
            wins++;
            net_score++;
        } else if (outcome[4] == 'L') {
            net_score--;
        }
    }
    let result;

    if (net_score == 0) {
        result = 'You Drew! '
    } else if (net_score > 0) {
        result = 'You Win! '
    } else {
        result = 'You Lose! '
    }

    return result + wins + '-' + (wins - net_score); 
}

console.log(playGame());