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

    //checks to see if the "p" key has been pressed
    if (!paused) {
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < stars.length; ++i) {
            stars[i].update();
        }
        ship.update();
        if (shoot) {
            for (var i = 0; i < bullets.length; ++i) {
                bullets[i].update();
            }
        }
    }
}