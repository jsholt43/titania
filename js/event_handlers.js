function event_KeyPress(e)
{
    console.log(e.which);
    switch(e.which) {
        case 32:
            console.log("space");
            //var bullet = new Bullet(ship.x, ship.y + 20, ship.size / 3, true);
            //bullet.update();
            shoot = true;
            console.log(shoot);
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
            paused = !paused;
            break;
    }
}

function event_MouseMove(e) 
{
    mouse.x = event.x;
    mouse.y = event.y;
}