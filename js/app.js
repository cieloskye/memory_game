//CREATE CARDS
var cards = ['fa-coffee', 'fa-coffee',
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
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//START GAME
var timer = document.getElementById('timer');

function initGame() {
  var deck = document.querySelector('.deck');
  var cardHTML = shuffle(cards).map(function(card) {
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

//FLIP & MATCH
var allCards = document.querySelectorAll('.card');
var openCards = [];
var matches = [];

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
            if (matches.length == 0) { //change to 8 - temp for easy testing
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
var second = 0;
var minute = second / 60;
var interval;
var time = timer.innerHTML

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
  if (moves === 1) {
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
var totalStars = document.querySelector('.stars').innerHTML;

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
var modal = document.getElementById('modalTime');
var span = document.getElementsByClassName('close')[0];
var score = document.getElementById('score');

function congrats() {
  if (matches.length == 0) {
  modal.style.display = 'block';
  score.innerHTML =  'Time: ' + time + '<br/>' +
                     'Moves: ' + moves + '<br/>' +
                     'Stars: ' + totalStars;
  }
}

//close button
span.onclick = function() {
    modal.style.display = "none";
}



/* Future Improvements
Fix Timer Format to be 00:00
Put stars on 1 line
Add time limit
Update ReadMe */
