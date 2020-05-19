'use strict';

var savedLinks = document.getElementById('saved-links');
var savedButton = document.getElementById('view-button');


function handleSavedPage(event){
  event.preventDefault();
  var userName = event.target.form[0].value;
  var savedDestinations = loadLocalStorage(userName);
  //check for no name entered into the form
  if (userName === '') {
    var noSavedItem = document.createElement('li');
    noSavedItem.textContent = 'Please Clear and Enter Username';
    savedLinks.appendChild(noSavedItem);

    //if name entered and there are no saved destinations
  }

  //if name entered and there are saved destinations
  if(localStorage.getItem(userName)){
    for (var i = 0; i < savedDestinations.length; i++){
      var newListItem = document.createElement('li');
      var linkTag = document.createElement('a');
      linkTag.setAttribute('href', savedDestinations[i].path);
      linkTag.textContent = savedDestinations[i].name;
      newListItem.appendChild(linkTag);
      savedLinks.appendChild(newListItem);
    }
  }


}


savedButton.addEventListener('click', handleSavedPage);
