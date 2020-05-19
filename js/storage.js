'use strict';

//match the current page we are viewing with the destination in our
// destination array cache.  Used to figure out the id of click area
//since we have multiple pages with Save This Destination "buttons"

var currentPage = window.location.pathname;
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
  if ((loadedDestinations === null) && (name !=='')){
    var noSavedItem = document.createElement('li');
    noSavedItem.textContent = 'You Have 0 Saved Destinations';
    savedLinks.appendChild(noSavedItem);
  }
  return loadedDestinations;
}


function addToLocalStorage(localStorageArr, destinationToAdd){
  var parentEl = document.getElementById('duplicate-dest');
  for(i = 0; i < localStorageArr.length; i++){
    if (localStorageArr[i].name === destinationToAdd.name){
      parentEl.textContent = 'You have already saved this Destination';
      return localStorageArr;
    }
  }
  localStorageArr.push(destinationToAdd);
  return localStorageArr;

}

function saveToLocalStorage(name,infoToSave){
  var parentEl = document.getElementById('duplicate-dest');
  var destinationsToSave = JSON.stringify(infoToSave);
  parentEl.textContent = '';
  if (name === ''){
    parentEl.textContent = 'Please Enter Username';
  }else{
    parentEl.textContent = 'Destination Saved';
    localStorage.setItem(name, destinationsToSave);
  }
}


function handleSave(event) {
  event.preventDefault();
  var userName = event.target.form[0].value;


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


saveDestination.addEventListener('click', handleSave);
