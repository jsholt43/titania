function Canvas(_canvas)
{

}

function Ship(x, y, dx, size) 
{
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
        this.x = mouse.x;

        if (this.x <= 0) {
            this.x = 0;
        } else if (this.x >= leftWidth - this.size) {
            this.x = leftWidth - this.size;
        }
        this.y = innerHeight - (innerHeight / 20) - 5;
        this.size = leftWidth / 20;
        this.draw();
    }
}

function Star(x, y, dy, size) 
{
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.size = size;

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

function Bullet(x, y, size) 
{
    this.x = x;
    this.y = y;
    this.size = size;

    this.draw = function() 
    {    
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0 ,2*Math.PI);
        c.stroke(); 
    }

    this.update = function() 
    {
        this.size = ship.size / 3;
        if (this.y <= 0) {
            this.y = 0;
        } else {
            this.y -= 4;
            this.draw();
        }
    }
}