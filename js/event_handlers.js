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

function event_MouseMove(e) {
    mouse.x = event.x;
    mouse.y = event.y;
}