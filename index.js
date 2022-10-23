function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  const choices = ['Rock', 'Paper', 'Scissors'];
  let computerSelection = choices[ranNum];
  return computerSelection;
}

function getPlayerSelection() {
  let playerSelection = prompt('Enter your choice');
  return playerSelection;
}

function playRound() {
  let compSel = getComputerChoice();
  let playSel = getPlayerSelection();
  let str;
  if (
    (playSel.toLowerCase() === 'rock') && (compSel.toLowerCase() === 'paper') ||
    (playSel.toLowerCase() === 'paper') && (compSel.toLowerCase() === 'scissors') ||
    (playSel.toLowerCase() === 'scissors') && (compSel.toLowerCase() === 'rock')
    ) {
      str = `You lose! ${compSel} beats ${playSel}`;
      return str;
    } else if (playSel.toLowerCase() === compSel.toLowerCase()) {
      str = `Nobody won! ${compSel} is the same as ${playSel}`;
      return str; 
    } else {
      str = `You won! ${playSel} beats ${compSel}`;
      return str;
    }
}

function game() {
  let scoreComputer = 0;
  let scorePlayer = 0;
  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    console.log(roundResult);
    if (roundResult.startsWith(`You lose!`) === true) {
      scoreComputer++;
    }  else if (roundResult.startsWith(`You won!`) === true) {
      scorePlayer++;
    }}
  let result = `Computer: ${scoreComputer} Player: ${scorePlayer}`;
  if(scoreComputer > scorePlayer) {
    console.log("You lose!")
  } else if (scorePlayer > scoreComputer) {
    console.log("You won!")
  } else {
    console.log("Everybody won!")
  }
  return result;
}

console.log(game());
