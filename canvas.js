var canvas = document.querySelector('canvas');

//canvas.width = window.innerWidth - 2;
//canvas.height = window.innerHeight - 2;

var c = canvas.getContext('2d');

//create two windows inside the canvas, one for the game and one to store player data
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var leftWidth = (canvas.width / 3) * 2; // 2/3 of canvas
var rightWidth = (canvas.width / 3); // 1/3 of canvas


var keys = {
    a: false,
    d: false,
    p: false,
    space: false
}

// function initializeCanvas() 
// {
//     window.addEventListener("resize", resizeCanvas, false);
//     resizeCanvas();
// }

// function resizeCanvas() 
// {
//     canvas.width = window.innerWidth;
//     leftWidth = (canvas.width / 3) * 2;
//     canvas.height = window.innerHeight;
//     rightWidth = (canvas.width / 3);
// }

function event_KeyPress(e)
{
    console.log(e.which);
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
        case 112:
            console.log("P");
            keys.p = !keys.p;
            break;
    }
}

// function event_MouseOut(e)
// {
//     console.log("true");
//     gamePause = true;
// }

// function event_MouseEnter(e)
// {
//     console.log("false");
//     gamePause = false;
// }

// window.addEventListener("keypress", event_KeyPress, false);
// window.addEventListener("mouseout", event_MouseOut, false);
// window.addEventListener('mouseenter', event_MouseEnter, false);

// function Ship(x, y, dx, size) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.size = size;

//     this.draw = function()
//     {
//         c.fillRect(this.x, this.y, this.size, this.size);
//     }

//     this.update = function()
//     {
//         if (keys.a == true) {
//             this.x -= 10;
//             keys.a = !keys.a;
//         } else if (keys.d == true) {
//             this.x += 10;
//             keys.d = !keys.d;
//         }

//         if (this.x <= 0) {
//             this.x = 0;
//         } else if (this.x >= leftWidth) {
//             this.x = leftWidth;
//         }
//         if (this.size >= 20) {

//         } else if (this.size <= 15) {

//         }
//         this.y = (innerHeight - this.size - 5);
//         this.size = leftWidth / 20;
//         console.log(this.size);
//         this.draw();
//     }
// }

// function Star(x, y, dy, size) 
// {
//     this.x = x;
//     this.y = y;
//     this.dy = dy;

//     this.draw = function() 
//     {
//         c.fillRect(this.x, this.y, this.size, this.size);
//     }

//     this.update = function()
//     {
//         if (this.y >= innerHeight) {
//             this.y = 10;
//             this.x = Math.floor(Math.random() * leftWidth);
//             this.dy = Math.floor((Math.random() * 2) + 5);
//             this.size = Math.floor(Math.random() * 4);
//         }
//         this.y += this.dy;
//         this.draw();
//     }
// }



/****** OBJECT CREATION ******/
var ship = new Ship(leftWidth / 2, innerHeight - (leftWidth / 20) - 5, 0, leftWidth / 20);

var stars = [];
for (var i = 0; i < leftWidth / 2; ++i) {
    stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * innerHeight), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
}



/****** SPRITE MOVEMENT ******/
// function animation() 
// {
//     requestAnimationFrame(animation);

//     //checks to see if the "p" key has been pressed
//     if (!keys.p) {
//         c.clearRect(0, 0, innerWidth, innerHeight);
//         for (var i = 0; i < stars.length; ++i) {
//             stars[i].update();
//         }
//         ship.update();
//     }
// }


/****** GAME LOOP ******/
// function game() 
// {
//     initializeCanvas();
//     window.addEventListener("keypress", event_KeyPress, false);
//     animation();
// }

game();