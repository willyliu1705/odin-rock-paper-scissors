"use strict";

let computerScore = 0;
let humanScore = 0;

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
    humanChoice++;
  } else {
    console.log("It's a draw!");
  }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);
