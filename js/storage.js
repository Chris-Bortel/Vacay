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

function saveToLocalStorage(name,infoToSave){
  var destinationsToSave = JSON.stringify(infoToSave);
  console.log(destinationsToSave);
  localStorage.setItem(name, destinationsToSave);
}


function loadLocalStorage(name){

  var localStorageDestinations = JSON.parse(localStorage.getItem(name));

  return localStorageDestinations;
}

function addToLocalStorage(localStorageArr, destinationToAdd){
  localStorageArr.push(destinationToAdd);
  console.log(localStorageArr);
  // tempArray.push(destinationToAdd);
  // console.log(tempArray);
  // return tempArray;
  return localStorageArr;
}

function handleSave(event) {
  event.preventDefault();
  console.log(event);

  var userName = prompt('Enter Name');

  var favDestinations = event.target.id;
  if(localStorage.getItem(userName) === null){
    for (var i = 0; i < destArray.length; i++){
      if (favDestinations === destArray[i].name){
        var savedArray = [];
        savedArray.push(destArray[i]);
        saveToLocalStorage(userName,savedArray);
      }
    }
  }else{
    for(i = 0; i < destArray.length;i++){
      console.log(favDestinations);
      console.log(destArray[i].name);
      if(favDestinations === destArray[i].name){
        var savedDestinations = loadLocalStorage(userName);
        var addToSaveDestinations = addToLocalStorage(savedDestinations, destArray[i]);
        console.log(addToSaveDestinations);
        saveToLocalStorage(userName,addToSaveDestinations);
        break;
      }
    }
  }
}


// key = name , value = destination object
// object that we already created will take us to saved web page


// TODO: Figure out how to fix the Uncaught TypeError

saveDestination.addEventListener('click', handleSave);
