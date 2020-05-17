'use strict';

console.log('i am alive')
var userName = '';
//match the current page we are viewing with the destination in our
// destination array cache.  Used to figure out the id of click area
//since we have multiple pages with Save This Destination "buttons"

var currentPage = window.location.pathname;
// console.log (currentPage);
for (var i = 0; i < destArray.length; i++){
  if (currentPage === destArray[i].path){
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
  userName = prompt('Enter Name');
  console.log(userName)

  var favDestinations = event.target.id;
  var existingDest = JSON.parse(localStorage.getItem(userName));

  //if nothing in storage, set empty array
  if(existingDest === null) {
    existingDest = [];
  }

  //find and stringify info we want to store
  for (var i = 0; i < destArray.length; i++){
    if (favDestinations === destArray[i].name){
      var storeThis = JSON.stringify(destArray[i]);
      break;
    }
handleSave();

  }
  console.log (existingDest);

  //push new info and return all entries to storage
  existingDest.push(storeThis);
  localStorage.setItem(userName, JSON.stringify(existingDest));
  /// TODO: Need to check for duplicates and not push
  
  ////// TODO: Message Modal function call
}
////////////////////////////////////////
//ALL IS WORKING AND TESTED ABOVE HERE

//function to get from local storage, put back through constructor
function retrieveStoredDestination(){

  if (localStorage.getItem(userName)){
    var loadDestination = JSON.parse(localStorage.getItem(userName));
    // console.log('I am the loaded destination', loadDestination);
    for (var i = 0; i < loadDestination.length; i++){
      new Destination(loadDestination[i].name, loadDestination[i].path,
        loadDestination[i].sun,loadDestination[i].snow);
    }
  }
  return Destination;
}
// function renderSaved (){
  //   //function to send user to Saved page
  //   window.open ('saved.html');
  //   //and render saved destinations
  //   retrieveStoredDestination();
  //   //loop through all objects created by retrieveStoredDestination
  //   document.write(Destination.path);
  // }
  
  
  saveDestination.addEventListener('click', handleSave);
  retrieveStoredDestination();

// TODO: Figure out how to fix the Uncaught TypeError
// site for how to not overwrite storage
