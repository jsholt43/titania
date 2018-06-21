var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

//graphics getContext
var c = canvas.getContext('2d');

//create two windows inside the canvas, one for the game and one to store player data
var leftWidth = (canvas.width / 3) * 2; // 2/3 of canvas
var rightWidth = (canvas.width / 3); // 1/3 of canvas

var mouse = {
    x: 0,
    y: 0
}

var keys = {
    a: false,
    d: false,
    space: false
}

function eventHandler(e)
{
    if (e.x != undefined && e.y != undefined) {
        mouse.x = e.x;
        mouse.y = e.y;
    }

    /*
    KEY CODES:
    SPACE = 32;
    A = 97;
    D = 100;
    */
    switch(e.which) {
        case 32:
            console.log("space");
            keys.space = true;
            break;
        case 97: 
            console.log("A");
            keys.a = true;
            break;
        case 100: 
            console.log("D");
            keys.d = true;
            break;
    }
}

//window.addEventListener("mousemove", eventHandler, false);
window.addEventListener("keypress", eventHandler, false);

function Ship(x, y, dx, size) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.size = size;

    this.draw = function()
    {
        c.fillRect(this.x, this.y, this.size, this.size);
    }

    this.update = function()
    {
        this.y = y;
        if (keys.a == true) {
            this.x -= 10;
            keys.a = false;
        } else if (keys.d == true) {
            this.x += 10;
            keys.d = false;
        }
        console.log(keys.a);
        this.draw();

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



/****** OBJECT CREATION ******/
var ship = new Ship(rightWidth / 2, innerHeight - 20, 0, leftWidth / 20);
var stars = [];
for (var i = 0; i < leftWidth / 2; ++i) {
    stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * innerHeight), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
}



/****** SPRITE MOVEMENT ******/
function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < stars.length; ++i) {
        stars[i].update();
    }

    ship.update();
}

animation();