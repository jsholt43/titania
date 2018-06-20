//searches entire document and finds canvas variable
var canvas = document.querySelector('canvas');

//set width and height of canvas to the width of the browser screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//allows drawing of elements that can be manipulated in a 2d space
var c = canvas.getContext('2d');

//create two windows inside the canvas, one for the game and one to store player data
var leftWidth = (canvas.width / 3) * 2;
var rightWidth = (canvas.width / 3);

c.beginPath();
c.strokeStyle = "red";
c.lineWidth = "1";
//left rectangle
c.rect(10, 10, leftWidth, canvas.height - 20);
//right rectangle
c.rect(leftWidth + 20, 10, rightWidth - 30, canvas.height - 20 )
c.stroke();
