'use strict';

var savedLinks = document.getElementById('saved-links');
var savedButton = document.getElementById('view-button');


function handleSavedPage(event){
  event.preventDefault();
  var userName = event.target.form[0].value;
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

savedButton.addEventListener('click', handleSavedPage);
