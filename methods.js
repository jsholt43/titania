function game() 
{
    initializeCanvas();
    window.addEventListener("keypress", event_KeyPress, false);
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
    if (!keys.p) {
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < stars.length; ++i) {
            stars[i].update();
        }
        ship.update();
    }
}

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