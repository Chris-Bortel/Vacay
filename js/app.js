'use strict';

//global variables
var destArray = [];

var sectionEl = document.getElementById('criteria');

//constructor function

function Destination(name, path, sun = 0, snow = 0) {
  this.name = name;
  this.path = path;
  this.sun = sun;
  this.snow = snow;

  destArray.push(this);
}

// instantiate objects
new Destination('Los Angeles', '../html/los-angeles.html', true);
new Destination('Cabo San Lucas', '../html/cabo-san-lucas.html', true);
new Destination('Granada', '../html/granada.html', true);
new Destination('Phuket', '../html/phuket.html', true);
new Destination('Stowe', '../html/stowe.html', '', true);
new Destination('Telluride', '../html/telluride.html', '', true);
new Destination('Tramsø', '../html/tramso.html', '', true);
new Destination('Zermatt', '../html/zermatt.html', '', true);
console.log(destArray);

// A function that goes through destArray and finds the 'sun' or 'snow' destinations based off of what the user chooses.
function weather(userChoice) {
  var choiceArray = [];
  for (var i = 0; i < destArray.length; i++) {
    if (userChoice.sun === destArray[i].sun) {
      choiceArray.push(destArray[i]);
      console.log('Sunny');
    }
    if (userChoice.snow === destArray[i].snow) {
      choiceArray.push(destArray[i]);
      console.log('Snowy');
    }
  }
  console.log(choiceArray);
  return choiceArray;
}


// Handler Function listener detects click on category.
// handler function() hears a click; create Object; determines if sun or snow and sets UserChoice.sun or UserChoice.snow to true as appropriate; pass UserChoice in to weather();
function handleChoice(event) {
  event.preventDefault();
  var sunOrSnow = {
    sun: false,
    snow: false
  };
  var criteriaClicked = event.target.textContent;
  console.log(criteriaClicked);
  if (criteriaClicked === 'Ski, Hike, Frolic!') {
    sunOrSnow.snow = true;
  }
  if (criteriaClicked === 'Vitamin D!') {
    sunOrSnow.sun = true;
  }
  weather(sunOrSnow);
  console.log(sunOrSnow);
}

sectionEl.addEventListener('click', handleChoice);


// want to randomize destArray.length and then put that array of eight into the weather() in order to separate the destinations into sun and snow destinations.

// function randomizer(max) {
//   return Math.floor(Math.random() * max);
// }

// // makes an array of the randomized numbers
// function fillArray() {
//   while (randArray.length < destArray.length) {
//     var randDest = randomizer(destArray.length);
//     if (randArray.includes(randDest)) {
//       console.log('repeat repeat');
//     } else {
//       randArray.push(randDest);
//     }
//   }
// }
// fillArray()

// // sun and snow array maker
// // uses fillArray to make a random array of destinations, and then sort the destinations into a sun or snow array. 
// function weather(destArray) {
//   fillArray();
//   for (var i = 0; i < randArray.length; i++) {
//     if (destArray[randArray[i]].sun === true) {
//       sunArray.push(destArray[randArray[i]]);
//       console.log('Sunny');
//     } else {
//       snowArray.push(destArray[randArray[i]]);
//       console.log('snowy')
//     }
//   }
// }
// weather(destArray);


// // TODO: Make sure that if they go back to the quiz page, that we do not start the randomizer over


