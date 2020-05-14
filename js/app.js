"use strict";

//global variables
var destArray = [];
var sunArray = [];
var snowArray = [];
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

// Create function that iterates through destArray(to fin hot or cold option) and creates and pushes to a new temp array

// ??? What is I just iterate the first for objects and push to sun array???

 function weather(destArray) {
  
  for (var i = 0 ; i < destArray.length ; i++) {
    if (destArray[i].sun === true) {
      sunArray.push(destArray[i]);
   console.log('Sunny')
      
    }
  }
}
weather(destArray);

// Destination.prototype.weather = function () {
//   var sunArray = this.Destination([2]);
//  if (this.sunArray.length === 0) {
//   for(var i = 0 ; i < destArray.length ; i++){
//         this.sunArray.push
//        console.log('I am sunny');
//       //  I need to figure out how to do this
//        var sun = this.sun
    
//   //  }    else {
//   //       this.sun === false;
//   //      console.log('I am snowy');
//   //       push[i](snowArray);
//   //    }
//   }
// }
