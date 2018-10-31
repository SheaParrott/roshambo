let POChoice = ''
let PTChoice = ''

const winner = () => {
  let winnerDecision = document.querySelector('h2')
  if (POChoice === 'rock' && PTChoice === 'rock') {
    winnerDecision.textContent = 'TIE!'
  }
  if (POChoice === 'paper' && PTChoice === 'paper') {
    winnerDecision.textContent = 'TIE!'
  }
  if (POChoice === 'scissors' && PTChoice === 'scissors') {
    winnerDecision.textContent = 'TIE!'
  }
  if (POChoice === 'rock' && PTChoice === 'paper') {
    winnerDecision.textContent = 'ALAS, WILL TURNER BE THE WINNER'
  }
  if (POChoice === 'rock' && PTChoice === 'scissors') {
    winnerDecision.textContent = 'ALAS, JACK SPARROW BE THE WINNER'
  }
  if (POChoice === 'paper' && PTChoice === 'rock') {
    winnerDecision.textContent = 'ALAS, JACK SPARROW BE THE WINNER'
  }
  if (POChoice === 'paper' && PTChoice === 'scissors') {
    winnerDecision.textContent = 'ALAS, WILL TURNER BE THE WINNER'
  }
  if (POChoice === 'scissors' && PTChoice === 'rock') {
    winnerDecision.textContent = 'ALAS, WILL TURNER BE THE WINNER'
  }
  if (POChoice === 'scissors' && PTChoice === 'paper') {
    winnerDecision.textContent = 'ALAS, JACK SPARROW BE THE WINNER'
  }
}

let PTHidden = () => {
  let x = document.getElementById('PTHidden')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

let POHidden = () => {
  let x = document.getElementById('POHidden')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

const PORock = () => {
  POChoice = 'rock'
  winner()
  POHidden()
}

const PTRock = () => {
  PTChoice = 'rock'
  winner()
  PTHidden()
}

const POPaper = () => {
  POChoice = 'paper'
  winner()
  POHidden()
}

const PTPaper = () => {
  PTChoice = 'paper'
  winner()
  PTHidden()
}

const POScissors = () => {
  POChoice = 'scissors'
  winner()
  POHidden()
}

const PTScissors = () => {
  PTChoice = 'scissors'
  winner()
  PTHidden()
}

const RSB = () => {
  window.location.reload(true)
}

const main = () => {
  let playerOneRock = document.querySelector('.playerOne .rock')

  let playerTwoRock = document.querySelector('.playerTwo .rock')

  let playerOnePaper = document.querySelector('.playerOne .paper')

  let playerTwoPaper = document.querySelector('.playerTwo .paper')

  let playerOneScissors = document.querySelector('.playerOne .scissors')

  let playerTwoScissors = document.querySelector('.playerTwo .scissors')

  let resetButton = document.querySelector('.buttonReset')

  resetButton.addEventListener('click', RSB)

  playerOneRock.addEventListener('click', PORock)

  playerTwoRock.addEventListener('click', PTRock)

  playerOnePaper.addEventListener('click', POPaper)

  playerTwoPaper.addEventListener('click', PTPaper)

  playerOneScissors.addEventListener('click', POScissors)

  playerTwoScissors.addEventListener('click', PTScissors)
}

document.addEventListener('DOMContentLoaded', main)
