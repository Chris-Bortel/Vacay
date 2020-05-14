"use strict";

//global variables
var destArray = [];
var sunArray = [];
var snowArray = [];
var randArray = [];

//constructor function

function Destination(name, path, sun) {
  this.name = name;
  this.path = path;
  this.sun = sun;

  destArray.push(this);
}

// instantiate objects
new Destination("Los Angeles", "../html/los-angeles.html", true);
new Destination("Cabo San Lucas", "../html/cabo-san-lucas.html", true);
new Destination("Granada", "../html/granada.html", true);
new Destination("Phuket", "../html/phuket.html", true);
new Destination("Stowe", "../html/stowe.html", false);
new Destination("Telluride", "../html/telluride.html", false);
new Destination("Tramsø", "../html/tramso.html", false);
new Destination("Zermatt", "../html/zermatt.html", false);
console.log(destArray);
// console.log(destArray[4]);

// want to randomize destArray.length and then put that array of eight into the weather() in order to separate the destinations into sun and snow destinations.

function randomizer() {
  return Math.floor(Math.random() * 8);
}

// makes an array of the randomized numbers
function fillArray() {
  while (randArray.length < destArray.length) {
    var randDest = randomizer(destArray.length);
    if (randArray.includes(randDest)) {
      console.log('repeat repeat');
    } else {
      randArray.push(randDest);
    }
  }
}
fillArray()

// sun and snow array maker
// uses fillArray to make a random array of destinations, and then sort the destinations into a sun or snow array. 
function weather(destArray) {
  fillArray();
  for (var i = 0; i < randArray.length; i++) {
    if (destArray[randArray[i]].sun === true) {
      sunArray.push(destArray[randArray[i]]);
      console.log("Sunny");
    } else {
      snowArray.push(destArray[randArray[i]]);
      console.log('snowy')
    }
  }
}
weather(destArray);


// TODO: Make sure that if they go back to the quiz page, that we do not start the randomizer over


