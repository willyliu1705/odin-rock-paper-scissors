"use strict";

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

function getHumanChoice() {
  let userChoice = prompt("rock, paper, or scissors?")

  return userChoice;
}

function playGame() {
  let roundNumber = 1;
  let computerScore = 0;
  let humanScore = 0;

  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    if (computerChoice === "rock" && humanChoice === "scissors"
      || computerChoice === "scissors" && humanChoice === "paper"
      || computerChoice === "paper" && humanChoice === "rock") {

      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    } else if (humanChoice === "rock" && computerChoice === "scissors"
      || humanChoice === "scissors" && computerChoice === "paper"
      || humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
      humanScore++;
    } else {
      console.log("It's a draw!");
    }

    if (roundNumber != 5) {
      roundNumber += 1;
      computerChoice = getComputerChoice();
      humanChoice = getHumanChoice();
      playRound(computerChoice, humanChoice);
    } else {
      if (computerScore > humanScore) {
        console.log("Computer wins the game!")
      } else if (computerScore < humanScore) {
        console.log("Congratulations, you win!")
      } else {
        console.log("The game is a tie.")
      }
      return;
    }
  }

  playRound(computerChoice, humanChoice);
}

playGame();