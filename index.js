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

console.log(getComputerChoice());
console.log(getPlayerSelection());

// function playRound() {
//   let computerSelection = getComputerChoice();
//   console.log(computerSelection);
//   let playerSelection = getPlayerSelection();
//   console.log(playerSelection);
//   let str;
//   if (
//     playerSelection.toLowerCase === 'rock' && computerSelection.toLowerCase === 'paper' ||
//     playerSelection.toLowerCase === 'paper' && computerSelection.toLowerCase === 'scissors' ||
//     playerSelection.toLowerCase === 'scissors' && computerSelection.toLowerCase === 'rock'
//     ){
//       str = `You lose!`;
//       return str;
//     } else if (
//       playerSelection === computerSelection
//       ){
//       str = 'Nobody won';
//       return str; 
//       } else {
//       str = `You won!`;
//       return str;
//       }
//     console.log(str);
// }

// function game() {
//   let scoreComputer = 0;
//   let scorePlayer = 0;
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     if (playRound() === 'You lose!') {
//       scoreComputer++;
//     }  else if (playRound() === `You won!`){
//       scorePlayer++;
//     }}
//   let result = `Computer: ${scoreComputer} Player: ${scorePlayer}`;
//   return result;
// }

// console.log(game());
