function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  const choices = ['Rock', 'Paper', 'Scissors'];
  let choice = choices[ranNum];
  return choice;
}

getComputerChoice();
console.log(getComputerChoice());
