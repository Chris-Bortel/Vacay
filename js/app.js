"use strict";

//global variables
var destArray = [];
var sunArray = [];
var snowArray = [];
//constructor function

function Destination(name, path, sun = 0, snow = 0) {
  this.name = name;
  this.path = path;
  this.sun = sun;
  this.snow = snow;

  destArray.push(this);
}

// instantiate objects
new Destination("Los Angeles", "../html/los-angeles.html", true);
new Destination("Cabo San Lucas", "../html/cabo-san-lucas.html", true);
new Destination("Granada", "../html/granada.html", true);
new Destination("Phuket", "../html/phuket.html", true);
new Destination("Stowe", "../html/stowe.html", "", true);
new Destination("Telluride", "../html/telluride.html", "", true);
new Destination("Tramsø", "../html/tramso.html", "", true);
new Destination("Zermatt", "../html/zermatt.html", "", true);
console.log(destArray);
console.log(destArray[4]);

// Create function that iterates through destArray(to fin hot or cold option) and creates and pushes to a new temp array

// ??? What is I just iterate the first for objects and push to sun array???

// Destination.prototype.weather = function () {
//   for (var i = 0; i < this.destArray.length; i++) {
//     if (this.sun === true) {
//       sun.push(sunArray);
//     } else {
//       snow.push(snowArray);
//     }
//   }
// };
// console.log(Destination.prototype.weather())
