function event_KeyPress(e)
{
    switch(e.which) {
        case 32:
            shoot = true;
            x_position = ship.x;
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