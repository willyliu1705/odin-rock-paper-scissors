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