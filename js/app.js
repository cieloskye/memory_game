
var cards = ['fa-coffee', 'fa-coffee',
            'fa-battery-full', 'fa-battery-full',
            'fa-laptop', 'fa-laptop',
            'fa-terminal', 'fa-terminal',
            'fa-stack-overflow', 'fa-stack-overflow',
            'fa-github', 'fa-github',
            'fa-google', 'fa-google',
            'fa-wifi', 'fa-wifi',
           ];


function generateCard(card) {
  return `<li class="card"><i class="fa ${card}"></i></li>`;
};


function initGame() {
  var deck = document.querySelector('.deck');
  var cardHTML = shuffle(cards).map(function(card) {
    return generateCard(card);
  });

  deck.innerHTML = cardHTML.join('');

}


initGame();


var allCards = document.querySelectorAll('.card');
var openCards = [];


allCards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (!card.classList.contains('open') && !card.classList.contains('show') & !card.classList.contains('match')) {
      openCards.push(card);
      card.classList.add('open', 'show');

        if (openCards.length == 2) {
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show');
            });
            openCards = [];
          }, 800);
        }
      }
  });
});


// Shuffle function from http://stackoverflow.com/a/2450976
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

/*
BELOW CODE ISN'T WORKING

var allCards = document.querySelectorAll('.card');
var openCards = [];


allCards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    openCards.push(card);
    card.classList.add('open', 'show');

    if (openCards.lenth == 2) {
      setTimeout(function() {
        openCards.forEach(function(card) {
          card.classList.remove('open', 'show');
        });
        openCards = [];
      }, 500);
    }
  });
});
*/


/*

function compareCards(cardA, cardB) {
  /*if (cardA == cardB) {

  } else {

  }

}

function gameOver() {
  var match = [];
  if (match.length === 16) {
    //display pop up
  }

function starRating() {}

function scoreCard() {}

function reset() {}

function moveCounter() {}

function timer(bool){}
*/
