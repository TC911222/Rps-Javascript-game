function playGame(playerMove) {
    const randomNumber = Math.random();
    let computerMove = '';
    let result = '';
  
    if (randomNumber < 1/3) {
      computerMove = 'Rock';
    } else if (randomNumber < 2/3) {
      computerMove = 'Paper';
    } else {
      computerMove = 'Scissors';
    }
  
    if (playerMove === computerMove) {
      result = 'Tie.';
    } else if (
      (playerMove === 'Rock' && computerMove === 'Scissors') ||
      (playerMove === 'Paper' && computerMove === 'Rock') ||
      (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
      result = 'You win.';
    } else {
      result = 'You lose.';
    }
  
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
  }
  