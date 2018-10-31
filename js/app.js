//CREATE CARDS
const cards = ['fa-coffee', 'fa-coffee',
            'fa-battery-full', 'fa-battery-full',
            'fa-laptop', 'fa-laptop',
            'fa-terminal', 'fa-terminal',
            'fa-stack-overflow', 'fa-stack-overflow',
            'fa-github', 'fa-github',
            'fa-google', 'fa-google',
            'fa-wifi', 'fa-wifi'];


function generateCard(card) {
  return `<li class="card", data-card="${card}"><i class="fa ${card}"></i></li>`;
};

//SHUFFLE CARDS function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//START GAME Inspired by Udacity Webinar https://www.youtube.com/watch?v=_rUH-sEs68Y
const timer = document.getElementById('timer');

function initGame() {
  const deck = document.querySelector('.deck');
  const cardHTML = shuffle(cards).map(function(card) {
    return generateCard(card);
  });
  deck.innerHTML = cardHTML.join('');
  //reset moves
  moves = 0;
  //reset timer
  timer.innerHTML = "0:0";
  clearInterval(interval);
}

initGame();

//FLIP & MATCH Inspired by Udacity Webinar https://www.youtube.com/watch?v=_rUH-sEs68Y
const allCards = document.querySelectorAll('.card');
let openCards = [];
let matches = [];

allCards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    //so you can't open same card twice
    if (!card.classList.contains('open') &&
        !card.classList.contains('show') &&
        !card.classList.contains('match')) {
          openCards.push(card);
          card.classList.add('open', 'show');
      if (openCards.length == 2) {
        moveCounter();
        if (openCards[0].dataset.card == openCards[1].dataset.card) {
          matches.push(openCards);
          openCards[0].classList.add('open', 'show', 'match');
          openCards[1].classList.add('open', 'show', 'match');
          openCards = [];
        } else {
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show');
            });
            openCards = [];
          }, 800);
          }
            if (matches.length == 8) {
              console.log(matches.length);
              stars();
              clearInterval(interval);
              congrats();
            }

        }
      }
  });
});


//TIMER
let second = 0;
let minute = second / 60;
var interval;
let time = timer.innerHTML

function gameTime() {
  interval = setInterval (function() {
    timer.innerHTML = minute + ':' + second;
    second++;
    if (second == 60) {
      second = 0;
      minute++;
    }
  }, 1000);
}


//MOVE COUNTER
moves = 0;
var moves = document.getElementById('moves').innerHTML

function moveCounter( ) {
  moves++
  document.getElementById('moves').innerHTML = moves;
  if (moves === 1) { //FIX The lag occurs because the timer starts when first card pair is clicked, instead of that start the timer on first card click.
    second == 0;
    minute == 0;
    gameTime();
  }
}


//RESET BUTTON
function reset () {
  window.location.reload();
}


//STAR RATING
function stars() {
  if (moves > 8 && moves < 13) {
    totalStars = 3;
  } else if (moves > 13 && moves < 22) {
     document.getElementById('3').classList.remove('fa-star');
     document.getElementById('3').classList.add('fa-star-o');
  } else if (moves > 22 && moves < 30) {
    document.getElementById('3').classList.remove('fa-star');
    document.getElementById('3').classList.add('fa-star-o');
    document.getElementById('2').classList.remove('fa-star');
    document.getElementById('2').classList.add('fa-star-o');
  } else if (moves > 30){
    document.getElementById('3').classList.remove('fa-star');
    document.getElementById('3').classList.add('fa-star-o');
    document.getElementById('2').classList.remove('fa-star');
    document.getElementById('2').classList.add('fa-star-o');
    document.getElementById('1').classList.remove('fa-star');
    document.getElementById('1').classList.add('fa-star-o');
  }
}

//Congrats Modal
const modal = document.getElementById('modalTime');
const span = document.getElementsByClassName('close')[0];
const score = document.getElementById('score');
const totalStars = document.querySelector('.stars li').innerHTML;

function congrats() {
  if (matches.length == 8) {
    modal.style.display = 'block';
    score.innerHTML =   'Time: ' + time + '<br/>' +  //FIX The time variable store initial value of the timer, not the updated value. Hence correct value is not displayed in modal box.
                        'Moves: ' + moves + '<br/>' +
                        'Stars: ' + (totalStars);
    //play again button
  }
}

//close button
span.onclick = function() {
    modal.style.display = "none";
}
