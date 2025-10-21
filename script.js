console.log("Hello World!");

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3)

  if (value === 0) {
    return "rock"
  } else if (value === 1) {
    return "paper"
  }
  else {
    return "scissors"
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt("rock, paper, or scissors?")

  return userChoice;
}

let userChoice = getHumanChoice();
console.log(userChoice);
