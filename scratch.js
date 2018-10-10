//popUp document.querySelector('#modal')

var stars = document.querySelectorAll('ul.stars li').removeChild(stars[0])



var second = 0;
minute = 0;

function startTimer(){
  var interval = setInterval(function(){
    timer.innerHTML = minute + " minutes, " + second " seconds ";
    second++;
    if (second == 60){
      minute++;
      second = 0;
    }
  }, 1000);
}


var timer = document.querySelector('.timer');
timer.innerHTML = "0 minutes, 0 seconds"
clearInterval(interval);



function moveCounter() {
  moves++
  counter.innerHTML = moves;
  if(moves == 1){
  second = 0;
  minute = 0;
  startTimer();
  }
}




/*
restart = document.querySelector('.restart')

restart.addEventListener('click', function() {
  clearTimer();
  function setTimer(){};
  openCards = [];
}) */

/*




function gameEnd() {
  if (matches.length == 8) {
    clearInterval(interval);
    finalTime = timer.innerHTML
    alert("Way to go! \n
          You made $(totalMoves) in $(finaltime) seconds! \n
          $(starRating) star for you! Congrats!");
    }
  } else {
    function lose() {
      clearInterval(interval);
      finalTime = timer.innerHTML
      alert("Uh-oh! Game over./n
            You made $(totalMoves) in $(finaltime) seconds. \n
            Better luck next time!");
    }
  }
}



/*
function starRating() {}

function scoreCard() {}

function moveCounter() {}

function setTimer

function reset button

*/

let popUp = document.getElementById('popUp2');
let starsList = document.querySelectorAll('.stars li');
let totalMoves = document.querySelector('moves')
let starRating = document.querySelector('.stars').innerHTML;
