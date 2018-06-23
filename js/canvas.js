var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var leftWidth = (canvas.width / 3) * 2;
var rightWidth = (canvas.height / 3);


var ship = new Ship(leftWidth / 2, innerHeight - (leftWidth / 20) - 5, 0, leftWidth / 20);
var stars = [];
for (var i = 0; i < leftWidth / 2; ++i) {
    stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * canvas.height), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
}
var bullets = [];


function game() 
{
    initializeCanvas();

    window.addEventListener("keypress", event_KeyPress, false);
    window.addEventListener("mousemove", event_MouseMove, false);

    animation();
}

function initializeCanvas() 
{
    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();
}

function resizeCanvas() 
{
    canvas.width = window.innerWidth;
    leftWidth = (canvas.width / 3) * 2;
    canvas.height = window.innerHeight;
    rightWidth = (canvas.width / 3);
}

function animation() 
{
    requestAnimationFrame(animation);

    frameCounter++;
    
    if (!paused) {
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < stars.length; ++i) {
            stars[i].update();
        }

        ship.update();

        if (shoot && frameCounter >= 20) {
            frameCounter = 0;
            bullets[bulletCount] = new Bullet(x_position, ship.y - (ship.size / 2), ship.size / 3, ship.x);
            bulletCount++;
            shoot = false;
        }
        for (var i = 0; i < bullets.length; ++i) {
            bullets[i].update();
        }
    }
}