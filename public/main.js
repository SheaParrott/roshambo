let PlayerOneChoice = ''
let PlayerTwoChoice = ''

let ChangeBackgroundImageToNone = () => {
  let changeBackground = document.querySelector('Section')
  changeBackground.classList.remove('JSWTMobile')
}
let ChangeWinnerDeclarationMargin = () => {
  let winnerDecision = document.querySelector('h2')
  winnerDecision.classList.add('winnerDeclarationMargin')
}
const winner = () => {
  let winnerDecision = document.querySelector('h2')
  if (PlayerOneChoice === 'rock' && PlayerTwoChoice === 'rock') {
    winnerDecision.textContent = 'TIE!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'paper' && PlayerTwoChoice === 'paper') {
    winnerDecision.textContent = 'TIE!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'scissors' && PlayerTwoChoice === 'scissors') {
    winnerDecision.textContent = 'TIE!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'rock' && PlayerTwoChoice === 'paper') {
    winnerDecision.textContent = 'ALAS, WILL TURNER BE THE WINNER!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'rock' && PlayerTwoChoice === 'scissors') {
    winnerDecision.textContent = 'ALAS, JACK SPARROW BE THE WINNER!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'paper' && PlayerTwoChoice === 'rock') {
    winnerDecision.textContent = 'ALAS, JACK SPARROW BE THE WINNER!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'paper' && PlayerTwoChoice === 'scissors') {
    winnerDecision.textContent = 'ALAS, WILL TURNER BE THE WINNER!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'scissors' && PlayerTwoChoice === 'rock') {
    winnerDecision.textContent = 'ALAS, WILL TURNER BE THE WINNER!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
  if (PlayerOneChoice === 'scissors' && PlayerTwoChoice === 'paper') {
    winnerDecision.textContent = 'ALAS, JACK SPARROW BE THE WINNER!!'
    ChangeBackgroundImageToNone()
    ChangeWinnerDeclarationMargin()
  }
}

let PlayerTwoHidden = () => {
  let x = document.getElementById('PlayerTwoHidden')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

let PlayerOneHidden = () => {
  let x = document.getElementById('PlayerOneHidden')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

const PlayerOneRock = () => {
  PlayerOneChoice = 'rock'
  winner()
  PlayerOneHidden()
}

const PlayerTwoRock = () => {
  PlayerTwoChoice = 'rock'
  winner()
  PlayerTwoHidden()
}

const PlayerOnePaper = () => {
  PlayerOneChoice = 'paper'
  winner()
  PlayerOneHidden()
}

const PlayerTwoPaper = () => {
  PlayerTwoChoice = 'paper'
  winner()
  PlayerTwoHidden()
}

const PlayerOneScissors = () => {
  PlayerOneChoice = 'scissors'
  winner()
  PlayerOneHidden()
}

const PlayerTwoScissors = () => {
  PlayerTwoChoice = 'scissors'
  winner()
  PlayerTwoHidden()
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

  playerOneRock.addEventListener('click', PlayerOneRock)

  playerTwoRock.addEventListener('click', PlayerTwoRock)

  playerOnePaper.addEventListener('click', PlayerOnePaper)

  playerTwoPaper.addEventListener('click', PlayerTwoPaper)

  playerOneScissors.addEventListener('click', PlayerOneScissors)

  playerTwoScissors.addEventListener('click', PlayerTwoScissors)
}

document.addEventListener('DOMContentLoaded', main)
