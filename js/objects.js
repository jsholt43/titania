function Ship(x, y, dx, size) {
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
        if (keys.a) {
            this.x -= 10;
            keys.a = !keys.a;
        } else if (keys.d) {
            this.x += 10;
            keys.d = !keys.d;
        }

        if (this.x <= 0) {
            this.x = 0;
        } else if (this.x >= leftWidth) {
            this.x = leftWidth;
        }
        if (this.size >= 20) {

        } else if (this.size <= 15) {

        }
        this.y = (innerHeight - this.size - 5);
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

function Bullet(x, y, size, moving) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.moving = moving;

    this.draw = function() {
        c.beginPath();
        //c.arc(this.x, this.y + 100, this.size, 0, 2*Math.PI)
        c.arc(this.x + this.size,this.y - this.size,this.size / 10,0,2*Math.PI);
        c.stroke();
    }

    this.update = function() {
        if (keys.space) {
            this.fire();
            if (this.y <= 0) {
                this.y = y;
                keys.space = !keys.space;
            }
        }
        this.draw();
    }

    this.fire = function() {
        this.y -= 10;
    }
}

