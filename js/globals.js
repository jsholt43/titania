var frameCounter = 0;
var paused = false;
var shoot = false;
var x_position = 0;

var bulletCount = 0;
var bulletInterval = 0;
var enemyInterval = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var leftWidth = (canvas.width / 3) * 2;
var rightWidth = (canvas.height / 3);

var mouse = {
    x: 0,
    y: 0
}

var keys = {
    p: false,
    space: false
}