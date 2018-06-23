var ship = new Ship(leftWidth / 2, innerHeight - (leftWidth / 20) - 5, 0, leftWidth / 20);
var stars = new Star;
var stars = stars.createArray();

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

        for (var i = 0; i < bullets.length; ++i) {
            bullets[i].update();
        }
    }
}