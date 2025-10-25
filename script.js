"use strict";

function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);

  if (value === 0) {
    return "rock";
  } else if (value === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function announceWinnerOfGame(gameWinner) {
  let announceWinnerDiv = document.createElement("div");
  announceWinnerDiv.classList.add("game-winner");
  switch (gameWinner) {
    case "Computer":
      announceWinnerDiv.textContent = `${gameWinner} has won the game!`;
      break;
    case "You":
      announceWinnerDiv.textContent = `${gameWinner} have won the game!`;
      break;
  }
  gameDiv.appendChild(announceWinnerDiv);
}

function announceRoundWinner(roundWinner) {
  let roundWinnerDiv = document.createElement("div");
  roundWinnerDiv.classList.add("round-winner");
  switch (roundWinner) {
    case "Computer":
      roundWinnerDiv.textContent = `${roundWinner} has won the round.`;
      break;
    case "You":
      roundWinnerDiv.textContent = `${roundWinner} have won the round.`;
      break;
    case "draw":
      roundWinnerDiv.textContent = `It's a ${roundWinner}.`;
      break
  }
  gameDiv.appendChild(roundWinnerDiv);
}

function clearCounters() {
  computerScoreSpan.textContent = "0";
  humanScoreSpan.textContent = "0";
}

function clearWinnerAnnouncements() {
  if (document.querySelector(".game-winner")) {
    // we also need to remove the round winner div as well
    document.querySelector(".round-winner").remove();
    document.querySelector(".game-winner").remove();
    clearCounters();
  } else if (document.querySelector(".round-winner")) {
    document.querySelector(".round-winner").remove();
  }
}

function playRound(computerChoice, humanChoice) {
  clearWinnerAnnouncements();
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  if (computerChoice === "rock" && humanChoice === "scissors"
    || computerChoice === "scissors" && humanChoice === "paper"
    || computerChoice === "paper" && humanChoice === "rock") {
    computerScoreSpan.textContent++;
    announceRoundWinner("Computer");
  } else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "scissors" && computerChoice === "paper"
    || humanChoice === "paper" && computerChoice === "rock") {
    humanScoreSpan.textContent++;
    announceRoundWinner("You");
  } else {
    announceRoundWinner("draw");
  }

  if (Number(computerScoreSpan.textContent) === 5) {
    announceWinnerOfGame("Computer");
  } else if (Number(humanScoreSpan.textContent) === 5) {
    announceWinnerOfGame("You");
  }
}

let allChoices = document.querySelectorAll("button");
let gameDiv = document.querySelector(".game");
let computerScoreSpan = document.querySelector(".computer-score");
let humanScoreSpan = document.querySelector(".human-score");

allChoices.forEach((button) => {
  button.addEventListener("click", (event) => {
    let humanChoice = event.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
  })
});

