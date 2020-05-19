'use strict';

//match the current page we are viewing with the destination in our
// destination array cache.  Used to figure out the id of click area
//since we have multiple pages with Save This Destination "buttons"

var currentPage = window.location.pathname;
console.log (currentPage);
for (var i = 0; i < destArray.length; i++){
  if (currentPage === destArray[i].path){
    var saveDestination = document.getElementById(destArray[i].name);
    break;
  }
}

//Handler function attached to Save This Destination click without overwriting
//previous saves

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
      return localStorageArr;
    }
  }
}

function saveToLocalStorage(name,infoToSave){
  var destinationsToSave = JSON.stringify(infoToSave);
  localStorage.setItem(name, destinationsToSave);
}


function handleSave(event) {
  event.preventDefault();
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
      if(favDestinations === destArray[i].name){
        var savedDestinations = loadLocalStorage(userName);
        var newSavedDestinations = addToLocalStorage(savedDestinations, destArray[i]);
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

saveDestination.addEventListener('click', handleSave);
