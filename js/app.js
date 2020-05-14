'use strict';

//global variables
var destArray = [];
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
console.log(destArray[4]);



