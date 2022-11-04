let str = '',
    scoreComputer = 0,
    scorePlayer = 0,
    rounds = 0;
const scores = document.querySelector('#scores');
const scoreC = document.createElement('div');
scoreC.classList.add('scoreComputer');
const scoreP = document.createElement('div');
scoreP.classList.add('scorePlayer');
const dbldot = document.createElement('div');
dbldot.classList.add('dbldot');
scoreC.textContent = `${scoreComputer}`;
dbldot.textContent = ':'
scoreP.textContent = `${scorePlayer}`;
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
  console.log(playSel);
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
    scores.appendChild(dbldot);
    scores.appendChild(scoreC);
    scoreC.textContent = `${scoreComputer}`;
    scoreP.textContent = `${scorePlayer}`;
    console.log(str);
    console.log(rounds);
  } else if (rounds > 1 && rounds < 5) {
    console.log(str);
    console.log(rounds);
    scoreC.textContent = `${scoreComputer}`;
    scoreP.textContent = `${scorePlayer}`;
  } else {
    scoreC.textContent = `${scoreComputer}`;
    scoreP.textContent = `${scorePlayer}`;
    console.log(`Comp: ${scoreComputer} Player: ${scorePlayer}`);
    if (scoreComputer > scorePlayer) {
      resText = 'Computer won!';
    } else if (scorePlayer > scoreComputer) {
      resText = 'You won!';
    } else {
      resText = 'Friendship won!';
    }
    resScore.textContent = `${resText}`;
    result.appendChild(resScore); 
    scorePlayer = 0,
    scoreComputer = 0,
    rounds = 0;
  };
};



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});
