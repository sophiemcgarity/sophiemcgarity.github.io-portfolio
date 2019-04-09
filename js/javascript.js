hamburger = document.getElementById('hamburger');
menu = document.getElementById('menu');

const toggleMenu = () => {
  menu.classList.toggle('showMenu');
  hamburger.classList.toggle('change');
}

hamburger.addEventListener('click', toggleMenu);

for (i = 0; i < menu.children.length; i++){
  menu.children[i].addEventListener('click', toggleMenu);
}

//home page title, adapted from https://codepen.io/ccprog/pen/qgxLrW
const colors = ['#1f27ib','#ffcf42','#009ed8'];
var blobs = document.querySelectorAll("#background path");

function colorBlob (blob) {
  blob.style.fill = colors[Math.floor(Math.random()*colors.length)];
}

blobs.forEach(blob => {
  blob.addEventListener('animationiteration', () => {
    colorBlob(blob);
  });
  colorBlob(blob);
})
