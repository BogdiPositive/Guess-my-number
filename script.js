'use strict';

function randomValue() {
  let randNumber = Math.trunc(Math.random() * 20) + 1;
  return randNumber;
}

let score = 20;
let highscore = 0;
let secretNumber = randomValue();
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    displayMessage('⛔ not a number');
  } else if (guessNumber === secretNumber) {
    displayMessage('🎉 Молодчик друже!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    score--;
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber != secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? '👎 бери меньше!' : '👍 бери больше!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤣 Ты проиграл друже!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  secretNumber = randomValue();
  score = 20;
  displayMessage('Ну что же, начнем...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
