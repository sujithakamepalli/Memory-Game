/*
 * Create a list that holds all of your cards
 */
var flag = false
var hrs = 0
var mns = 0
var scs = 0
var cards = document.getElementsByClassName("card");
var move = document.querySelector(".moves");
cardviewed = []
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", display)
}

function display() {
  if (!flag) {
    timerStart()
    flag = true
  }

  this.classList.add("open", "show", "disabled")
  cardviewed.push(this)
  if (cardviewed.length == 2) {
    checkmatch()
    moveCounter()
  }
}

function moveCounter() {
  moves = move.innerHTML;
  moves++;
  move.innerHTML = moves;
  rating()
}
var count = 0

function checkmatch() {
  if (cardviewed[0].children[0].className == cardviewed[1].children[0].className) {
    for (i = 0; i < cardviewed.length; i++) {
      cardviewed[i].classList.remove("open", "show", "disabled")
      cardviewed[i].classList.add("match", "disabled")
      count = count + 1
    }
    cardviewed = []
    var interval;
    if (count == 16) {
      clearInterval(interval);
      game();
      //function used for stoping time if the player wins the game
      var killId = setTimeout(function() {
        for (var i = killId; i > 0; i--) clearInterval(i)
      }, 1000)
    }
  } else {
    setTimeout(waitimg, 100)
  }
}

function waitimg() {
  cardviewed[0].classList.remove("open", "show", "disabled")
  cardviewed[1].classList.remove("open", "show", "disabled")
  cardviewed = []
}
var stars = [...document.querySelectorAll('.fa-star')];
var rate = 3;
//function that calculate the rating based on moves
function rating() {
  if (moves == 4) {
    stars[2].classList.add('fa-star-o');
    stars[2].classList.remove('fa-star');
    rate = rate - 1;
  } else if (moves == 6) {
    stars[1].classList.add('fa-star-o');
    stars[1].classList.remove('fa-star');
    rate = rate - 1;
  } else if (moves >= 7) {
    rate = 1;
  }
}

/*
  Display the cards on the page
    - shuffle the list of cards using the provided "shuffle" method below
    - loop through each card and create its HTML
    - add each card's HTML to the page
 */
var d = document.querySelector(".deck");
var cardShuffle = shuffle(cards);
for (var i = 0; i < 16; i++) {
  [].forEach.call(cards, function(items) {
    d.appendChild(items);
  });
};
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function timerStart() {
  var timer = document.querySelector(".timer")
  timerin = setInterval(function() {
    scs++;
    if (scs == 60) {
      mns++;
      scs = 0;
    }
    if (mns == 60) {
      mns = 0;
      hrs++;
    }
    //displaying the time
    timer.innerHTML = hrs + " : " + mns + " : " + scs;
  }, 1000);
}

function game() {
  swal({
    allowEscapeKey: false,
    allowOutsideClick: false,
    html: true,
    title: 'you won the game',
    text: 'With ' + moves + ' moves' + ' ' + mns + ' ' + ' minutes' + ' ' + scs + ' ' + ' seconds' + ' ' + 'Rating : ' + rate,
    type: 'success',
    confirmButtonText: 'Do you want to play again..!!'
  }, function() {
    //operation that has to be performed after clicking the button
    location.reload();
  })
}

function reload() {
  window.location.reload();
}
