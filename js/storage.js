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


function loadLocalStorage(name){
  var loadedDestinations = JSON.parse(localStorage.getItem(name));
  return loadedDestinations;
}

function addToLocalStorage(localStorageArr, destinationToAdd){
  for(i = 0; i < localStorageArr.length; i++){
    if (localStorageArr[i].name === destinationToAdd.name){
      alert('You have already saved this Destination!');
      return localStorageArr;
    }else{
      localStorageArr.push(destinationToAdd);
      console.log(localStorageArr);
      return localStorageArr;
    }
  }
}

function saveToLocalStorage(name,infoToSave){
  var destinationsToSave = JSON.stringify(infoToSave);
  console.log(destinationsToSave);
  localStorage.setItem(name, destinationsToSave);
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
        console.log(savedDestinations);
        var newSavedDestinations = addToLocalStorage(savedDestinations, destArray[i]);
        console.log(newSavedDestinations);
        saveToLocalStorage(userName,newSavedDestinations);
        break;
      }
    }
  }
}


var savedLinks = document.getElementById('saved-links');

function savedPage(){
  var userName = prompt('Enter Username');
  if(localStorage.getItem(userName)){
    var savedDestinations = loadLocalStorage(userName);
    for (var i = 0; i < savedDestinations.length; i++){
      var newListItem = document.createElement('li');
      var linkTag = document.createElement('a');
      linkTag.setAttribute('href', savedDestinations[i].path);
      linkTag.textContent = savedDestinations[i].name;
      newListItem.appendChild(linkTag);
      savedLinks.appendChild(newListItem);
    }
  }
  if (localStorage.getItem(userName) === null){
    var noSavedItem = document.createElement('li');
    noSavedItem.textContent = 'You currently have 0 saved Destinations';
    savedLinks.appendChild(noSavedItem);
  }
}

// key = name , value = destination object
// object that we already created will take us to saved web page


// TODO: Figure out how to fix the Uncaught TypeError

saveDestination.addEventListener('click', handleSave);
