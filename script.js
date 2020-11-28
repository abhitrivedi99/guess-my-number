'use strict'

let secret = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value)
  // console.log(guess, typeof guess)

  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!'
    displayMessage('No Number!')

    //player wins the game
  } else if (guess === secret) {
    displayMessage('Congratulations!!')
    // document.querySelector('.message').textContent = 'Congratulations!!'
    document.querySelector('.number').textContent = secret
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
    //when guess is too high
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? 'Too High!!' : 'Too low!!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You Loose the Game!!')
      document.querySelector('.score').textContent = 0
    }
  } else {
    displayMessage('Guess Again!')
  }
})

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1
  score = 20
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').style.width = '15rem'
})
