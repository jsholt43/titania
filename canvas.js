var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//create two windows inside the canvas, one for the game and one to store player data
var leftWidth = (canvas.width / 3) * 2;
var rightWidth = (canvas.width / 3);

function Star(x, y, dy, size) 
{
    this.x = x;
    this.y = y;
    this.dy = dy;

    this.draw = function() 
    {
        c.fillRect(this.x, this.y, size, size);
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

var stars = [];
for (var i = 0; i < 50; ++i) {
    stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * innerHeight), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
}

function starMovement() 
{
    requestAnimationFrame(starMovement);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (var i = 0; i < stars.length; ++i ) {
        stars[i].update();
    }
}

starMovement();