'use strict';

var picIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('lASlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  picIndex++;
  if (picIndex > x.length) {picIndex = 1}
  x[picIndex-1].style.display = 'block';
  setTimeout(carousel, 2000); // Change image every 2 seconds
}