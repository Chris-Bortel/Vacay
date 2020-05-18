"use strict";

console.log("i am alive");
var userName = {
  userName: "",
};
var destinationList = document.getElementById("destination-list");
//match the current page we are viewing with the destination in our
// destination array cache.  Used to figure out the id of click area
//since we have multiple pages with Save This Destination "buttons"

var currentPage = window.location.pathname;
// console.log (currentPage);
for (var i = 0; i < destArray.length; i++) {
  if (currentPage === destArray[i].path) {
    // console.log(destArray[i].path);
    var saveDestination = document.getElementById(destArray[i].name);
    // console.log(saveDestination);
    break;
  }
}

//Handler function attached to Save This Destination click without overwriting
//previous saves

function handleSave(event) {
  event.preventDefault();
  console.log(event);
  userName = prompt("Enter Name");
  console.log(userName);

  var favDestinations = event.target.id;
  var existingDest = JSON.parse(localStorage.getItem(userName));

  //if nothing in storage, set empty array
  if (existingDest === null) {
    existingDest = [];
  }

  //find and stringify info we want to store
  for (var i = 0; i < destArray.length; i++) {
    if (favDestinations === destArray[i].name) {
      var storeThis = JSON.stringify(destArray[i]);
      break;
    }
    // handleSave();
  }
  console.log("existing destination: ", existingDest);

  //push new info and return all entries to storage
  existingDest.push(storeThis);
  localStorage.setItem(userName, JSON.stringify(existingDest));
  /// TODO: Need to check for duplicates and not push

  ////// TODO: Message Modal function call
}
////////////////////////////////////////
//ALL IS WORKING AND TESTED ABOVE HERE

//function to get from local storage, put back through constructor
function retrieveStoredDestination(userName) {
  if (localStorage.getItem(userName)) {
    //TODO: do we have a username key?
    var loadDestination = JSON.parse(localStorage.getItem(userName));
    // console.log(loadDestination);
    for (var i = 0; i < loadDestination.length; i++) {
      new Destination(
        loadDestination[i].name,
        loadDestination[i].path,
        loadDestination[i].sun,
        loadDestination[i].snow
      );
    }
    console.log(Destination);
    console.log(existingDest);
    // console.log(retrieveStoredDestination());
  }

  return Destination;
}
// retrieveStoredDestination();
//This will reder the saved destinations to the saved page
function renderSaved(savedArray) {
  for (var i = 0; i < savedArray.length; i++) {
    var destinationListUlEl = document.createElement("li");
    console.log(destinationListUlEl);
    destinationListUlEl.textContent = savedArray[i].name + savedArray[i].path;
    destinationList.appendChild(destinationListUlEl);
  }

  //TODO: figure out what the index is for get elements by classname. 
  // TODO: on event we will render the saved destination objects to the saved page.

  // on click of view saved destinations, we will retrieve  local storage

  //function to send user to Saved page
  // window.open ('saved.html', '_self');
  //and render saved destinations
  //loop through all objects created by retrieveStoredDestination
  // document.write(Destination.path);
}

function handleRender(event) {
  var userName = prompt("Enter username ");
  var saved = retrieveStoredDestination(userName);
  console.log(saved);
}

saveDestination.addEventListener("click", handleSave);
renderSaved();
console.log(renderSaved());
retrieveStoredDestination();

// TODO: Figure out how to fix the Uncaught TypeError
// site for how to not overwrite storage
