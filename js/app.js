'use strict';

//global variables
var destArray = [];

var sunEl = document.getElementsByClassName('flip-box-back-2');

var snowEl = document.getElementsByClassName('flip-box-back');


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
function weather(sunOrSnow) {
  var choiceArray = [];
  for (var i = 0; i < destArray.length; i++) {
    if (sunOrSnow.sun === destArray[i].sun) {
      choiceArray.push(destArray[i]);
    }
    if (sunOrSnow.snow === destArray[i].snow) {
      choiceArray.push(destArray[i]);
    }
  }
  console.log(choiceArray);
  return choiceArray;
}


function randomizer(array) {
  var randomNumber =  Math.floor(Math.random() * array.length);
  console.log(array.length);
  console.log(randomNumber);
  return randomNumber;
}

// Handler Function listener detects click on category.
// handler function() hears a click; create Object; determines if sun or snow and sets UserChoice.sun or UserChoice.snow to true as appropriate; pass UserChoice in to weather();
function handleChoice(event) {
  event.preventDefault();

  var criteriaClicked = event.path[1].id;
  var criteriaClicked2 = event.path[2].id;

  console.log(criteriaClicked);
  console.log(criteriaClicked2);
  console.log(event);

  var sunOrSnow = {
    sun: false,
    snow: false
  };

  if ((criteriaClicked || criteriaClicked2) === 'Snow') {
    sunOrSnow.snow = true;
  }
  if ((criteriaClicked || criteriaClicked2) === 'Sun') {
    sunOrSnow.sun = true;
  }
  weather(sunOrSnow);
  console.log(sunOrSnow);
}

sunEl[0].addEventListener('click', handleChoice);

snowEl[0].addEventListener('click', handleChoice);




