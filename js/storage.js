'use strict';

var currentPage = window.location.pathname;
console.log (currentPage);
for (var i = 0; i < destArray.length; i++){
  if (currentPage === destArray[i].path){
    console.log(destArray[i].path);
    var saveDestination = document.getElementById(destArray[i].name);
    console.log(saveDestination);
    break;
  }
}

//Handler function attached to Save This Destination click
function handleSave(event) {
  event.preventDefault();
  console.log(event);
  var userName = prompt('Enter Name');
  var favDestinations = event.target.id;
  var existingDest = JSON.parse(localStorage.getItem(userName));

  //if nothing in storage, set empty array
  if(existingDest === null) {
    existingDest = [];
  }
  console.log (existingDest);

  //find and stringify info we want to store

  for (var i = 0; i < destArray.length; i++){
    if (favDestinations === destArray[i].name){
      var storeThis = JSON.stringify(destArray[i]);
      break;
    }
  }
  console.log (existingDest);

  //push new info and return all entries to storage
  existingDest.push(storeThis);
  localStorage.setItem(userName, JSON.stringify(existingDest));
}

//https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage


//function to get from local storage, put back through constructor
function loadStoredDestination(){

  var userName = prompt('Enter Name');

  if (localStorage.getItem(userName)){
    var loadDestination = JSON.parse(localStorage.getItem(userName));
    for (var i = 0; i < loadDestination.length; i++){
      new Destination(loadDestination[i].name, loadDestination[i].path,
        loadDestination[i].sun,loadDestination[i].snow);
    }
  }
}


// TODO: Figure out how to fix the Uncaught TypeError

saveDestination.addEventListener('click', handleSave);

