var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

//graphics getContext
var c = canvas.getContext('2d');

//create two windows inside the canvas, one for the game and one to store player data
var leftWidth = (canvas.width / 3) * 2;
var rightWidth = (canvas.width / 3);

var mousePosition = {
    x: 0,
    y: 0
}

function eventHandler(e)
{
    mousePosition.x = e.x;
    mousePosition.y = e.y;
}

window.addEventListener("mousemove", eventHandler, false);

function Ship(x, y, dx) {
    this.dx = dx;
    this.y = innerHeight - 20;

    this.draw = function()
    {
        c.fillRect(this.x, this.y, 6, 6);
    }

    this.update = function()
    {
        this.x = mousePosition.x;
    }
}

function Star(x, y, dy, size) 
{
    this.x = x;
    this.y = y;
    this.dy = dy;

    this.draw = function() 
    {
        c.fillRect(this.x, this.y, this.size, this.size);
    }

    this.update = function()
    {
        if (this.y >= innerHeight) {
            this.y = 10;
            this.x = Math.floor(Math.random() * leftWidth);
            this.dy = Math.floor((Math.random() * 2) + 5);
            this.size = Math.floor(Math.random() * 4);
        }
        this.y += this.dy;
        this.draw();
    }
}

var ship = new Ship(rightWidth / 2);
var stars = [];
for (var i = 0; i < 50; ++i) {
    stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * innerHeight), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
}



/****** SPRITE ANIMATION ******/
function starMovement() 
{
    requestAnimationFrame(starMovement);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < stars.length; ++i ) {
        stars[i].update();
    }
}

function shipMovement() {
    requestAnimationFrame(shipMovement);
    c.clearRect(0, 0, innerWidth, innerHeight);
    ship.update();
}

starMovement();