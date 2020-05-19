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
// new Destination('Los Angeles', '/Vacay/los-angeles.html', true);
// new Destination('Cabo San Lucas', '/Vacay/cabo-san-lucas.html', true);
// new Destination('Granada', '/Vacay/granada.html', true);
// new Destination('Phuket', '/Vacay/phuket.html', true);
// new Destination('Stowe', '/Vacay/stowe.html', '', true);
// new Destination('Telluride', '/Vacay/telluride.html', '', true);
// new Destination('Tramso', '/Vacay/tramso.html', '', true);
// new Destination('Zermatt', '/Vacay/zermatt.html', '', true);

///copy for live-server testing
new Destination('Los Angeles', '/los-angeles.html', true);
new Destination('Cabo San Lucas', '/cabo-san-lucas.html', true);
new Destination('Granada', '/granada.html', true);
new Destination('Phuket', '/phuket.html', true);
new Destination('Stowe', '/stowe.html', '', true);
new Destination('Telluride', '/telluride.html', '', true);
new Destination('Tramso', '/tramso.html', '', true);
new Destination('Zermatt', '/zermatt.html', '', true);

//takes in user selection on the dropdopwn menu and directs user to correct destinaton page
function dropDownSelection(){
  var dropDown = document.getElementById('dest').value;
  if (dropDown === 'Stowe'){
    window.open(destArray[4].path,'_self');
  } else if (dropDown === 'Telluride'){
    window.open(destArray[5].path,'_self');
  } else if (dropDown === 'Tramso'){
    window.open(destArray[6].path,'_self');
  } else if (dropDown === 'Zermatt'){
    window.open(destArray[7].path,'_self');
  } else if (dropDown === 'Cabo-San-Lucas'){
    window.open(destArray[1].path,'_self');
  } else if (dropDown === 'Granada'){
    window.open(destArray[2].path,'_self');
  } else if (dropDown === 'Los-Angeles'){
    window.open(destArray[0].path,'_self');
  } else if (dropDown === 'Phuket'){
    window.open(destArray[3].path,'_self');
  }
  dropDown.selected.value = 'reset';
}


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
  return choiceArray;
}

//outputs random number for index of destination
function randomizer(array) {
  var randomNumber =  Math.floor(Math.random() * array.length);
  return randomNumber;
}

// Handler Function listener detects click on category.
// handler function() hears a click; create Object; determines if sun or snow and sets UserChoice.sun or UserChoice.snow to true as appropriate; pass UserChoice in to weather();
function handleChoice(event) {
  event.preventDefault();

  var criteriaClicked = event.path[1].id;
  var criteriaClicked2 = event.path[2].id;

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
  var userChoiceArr = weather(sunOrSnow);
  var randomIndex = randomizer(userChoiceArr);
  window.open(userChoiceArr[randomIndex].path,'_self');
}

//event listener

sunEl[0].addEventListener('click', handleChoice);
snowEl[0].addEventListener('click', handleChoice);








