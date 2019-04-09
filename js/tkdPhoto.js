
//tkd slideshow adapted from https://www.w3schools.com/w3css/w3css_slideshow.asp
var photo = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("myPhotoSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  photo++;
  if (photo > x.length) {photo = 1}
  x[photo-1].style.display = "block";
  setTimeout(carousel, 2000);
}
