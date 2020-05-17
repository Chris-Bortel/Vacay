'use strict';

var currentPage = window.location.pathname;
console.log (currentPage);
for (var i = 0; i < destArray.length; i++){
  if (currentPage === destArray[i].path){
    console.log(destArray[i].path);
    var saveDestination = document.getElementById(destArray[i].name);
    break;
  }
  console.log(saveDestination);
}


function handleSave(event) {
  event.preventDefault();
  console.log(event);
  var userName = prompt('Enter Name');
  var favDestinations = event.target.id;

  for (var i = 0; i < destArray.length; i++){
    if (favDestinations === destArray[i].name){
      var storedDestination = JSON.stringify(destArray[i]);
      localStorage.setItem(userName, storedDestination);

    }
  }
  console.log(userName);
}


// key = name , value = destination object
// object that we already created will take us to saved web page


// TODO: Figure out how to fix the Uncaught TypeError

saveDestination.addEventListener('click', handleSave);

