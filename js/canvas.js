var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

//create two windows inside the canvas, one for the game and one to store player data
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var leftWidth = (canvas.width / 3) * 2; // 2/3 of canvas
var rightWidth = (canvas.width / 3); // 1/3 of canvas

var mouse = {
    x: 0,
    y: 0
}

var keys = {
    a: false,
    d: false,
    p: false,
    space: false
}

/****** OBJECT CREATION ******/
var ship = new Ship(leftWidth / 2, innerHeight - (leftWidth / 20) - 5, 0, leftWidth / 20);

var stars = [];
for (var i = 0; i < leftWidth / 2; ++i) {
    stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * innerHeight), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
}

var bullet = new Bullet(ship.x, ship.y + 20, ship.size / 3);

game();