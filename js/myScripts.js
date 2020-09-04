//Change the color of the background to a random color when the button is clicked.

//creating a variable that will get the background document
var background = document.getElementById("Background")
var button = document.getElementById("button")

var colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}




function changeColor(newColor) {
  var elem = document.getElementById('Background');
  elem.style.color = newColor;
}