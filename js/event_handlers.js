function event_KeyPress(e)
{
    switch(e.which) {
        case 32:
            //var bullet = new Bullet(ship.x, ship.y + 20, ship.size / 3, true);
            //bullet.update();
            shoot = true;
            x_position = mouse.x;
            break;
        case 97: 
            keys.a = true;
            break;
        case 100: 
            keys.d = true;
            break;
        case 112:
            paused = !paused;
            break;
    }
}

function event_MouseMove(e) 
{
    mouse.x = event.x;
    mouse.y = event.y;
}