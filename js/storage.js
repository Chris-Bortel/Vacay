'use strict';

var saveDestination = document.getElementById('Los Angeles');
// console.log(saveDestination);
function handleSave(event) {
  event.preventDefault();
  console.log(event);
  var userName = prompt('Enter Name');
  console.log(userName);
}

// key = name , value = destination object
// object that we already created will take us to saved web page


// TODO: Figure out how to fix the Uncaught TypeError
saveDestination.addEventListener('click', handleSave);