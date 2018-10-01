var allCards = document.querySelectorAll('.card');

allCards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    card.classList.add('open', 'show');
  });
});




/*


 function createCards(listItem) {
   var card = document.createElement("card", [options]);

 }

 function grid() {


 }

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

function compareCards(cardA, cardB) {
  /*if (cardA == cardB) {

  } else {

  }

}

function moveCounter() {
}

function timer(bool){

}


function gameOver() {
  var match = [];
  if (match.length === 16) {
    //display pop up
  }

function starRating() {}


function scoreCard() {}

function reset() {}

*/
