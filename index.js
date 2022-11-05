let str = '',
    scoreComputer = 0,
    scorePlayer = 0,
    rounds = 0;
const scores = document.querySelector('#scores');
const scoreC = document.createElement('div');
scoreC.classList.add('scoreComputer', 'score');
const scoreP = document.createElement('div');
scoreP.classList.add('scorePlayer', 'score');
scoreC.textContent = `Computer: ${scoreComputer}`;
scoreP.textContent = `Player: ${scorePlayer}`;
const result = document.querySelector('#result');
const resScore = document.createElement('p');
resScore.classList.add('resScore');
let resText;

function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  const choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[ranNum];
  return computerSelection;
};

function playRound(e) {
  let compSel = getComputerChoice();
  let playSel = e.target.id;
  let str;
  if (
    (playSel === 'rock') && (compSel === 'paper') ||
    (playSel === 'paper') && (compSel === 'scissors') ||
    (playSel === 'scissors') && (compSel === 'rock')
    ) {
      str = `You lose! ${compSel} beats ${playSel}`;
      scoreComputer++;
    } else if (playSel === compSel) {
      str = `Nobody won! ${compSel} is the same as ${playSel}`;
    } else {
      str = `You won! ${playSel} beats ${compSel}`;
      scorePlayer++;
    };
  rounds++;
  if (rounds === 1){
    scores.appendChild(scoreP);
    scores.appendChild(scoreC);
    scoreC.textContent = `Computer: ${scoreComputer}`;
    scoreP.textContent = `Player: ${scorePlayer}`;
    console.log(str);
  } else if (scoreComputer < 5 && scorePlayer < 5) {
    scoreC.textContent = `Computer: ${scoreComputer}`;
    scoreP.textContent = `Player: ${scorePlayer}`;
    console.log(str);
  } else {
    scoreC.textContent = `Computer: ${scoreComputer}`;
    scoreP.textContent = `Player: ${scorePlayer}`;
    console.log(str);
    if (scoreComputer > scorePlayer) {
      resText = 'Computer won!';
    } else if (scorePlayer > scoreComputer) {
      resText = 'You won!';
    } else {
      resText = 'Friendship won!';
    };
    resScore.textContent = `${resText}`;
    result.appendChild(resScore); 
    scorePlayer = 0;
    scoreComputer = 0;
    rounds = 0;
  };
};



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});
