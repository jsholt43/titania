var frameCounter = 0;
var paused = false;
var shoot = false;
var bulletCount = 0;
var x_position = 0;

var mouse = {
    x: 0,
    y: 0
}

var keys = {
    p: false,
    space: false
}

/****** OBJECT CREATION ******/
// var ship = new Ship(leftWidth / 2, innerHeight - (leftWidth / 20) - 5, 0, leftWidth / 20);

// var stars = [];
// for (var i = 0; i < leftWidth / 2; ++i) {
//     stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * canvas.height), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
// }

// var bullets = [];

//game();