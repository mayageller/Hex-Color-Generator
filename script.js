function getColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}



function setBackground() {
  var bgColor = getColor();
  document.body.style.background = bgColor;
}
document.body.onkeyup = function(e) {
if (e.keyCode == 32) {
setBackground();
}
};




function randomize() {
  document.getElementById('p1').style.color = randomColors();
}


// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


