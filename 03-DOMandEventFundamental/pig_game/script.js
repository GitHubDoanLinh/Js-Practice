'use strict';
const player0RP = document.querySelector('.player--0');
const player1RP = document.querySelector('.player--1');
const score0RP = document.querySelector('.score');
const score1RP = document.getElementById('score--1');
const current0RP = document.getElementById('current--0');
const current1RP = document.getElementById('current--1');
const diceRP = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, isPlaying;// Global scope
//Start conditions
const init = function() {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  isPlaying = true;

  score0RP.textContent = 0;
  score1RP.textContent = 0;
  current0RP.textContent = 0;
  current1RP.textContent = 0;

  diceRP.classList.add('hidden');
  player0RP.classList.remove('player--winner');
  player1RP.classList.remove('player--winner');
  player0RP.classList.add('player--active');
  player1RP.classList.remove('player--active');
}
init();
const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0RP.classList.toggle('player--active');
  player1RP.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function() {
  if (isPlaying) {
    //1: Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2: Display dice
    diceRP.classList.remove('hidden');
    diceRP.src = `dice-${dice}.png`;
    //3: Check for rolled 1 : if true => Switch player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (isPlaying){
    //1 : add current score to the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2: Check player's score >= score to win
    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      diceRP.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

 btnNew.addEventListener('click', init);

