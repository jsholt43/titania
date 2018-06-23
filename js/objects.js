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

function Star(x, y, dy, size, array) 
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

    this.createArray = function()
    {
        var stars = [];
        for (var i = 0; i < leftWidth / 2; ++i) {
        stars.push(new Star(Math.floor(Math.random() * leftWidth), Math.floor(Math.random() * canvas.height), Math.floor((Math.random() * 3) + 3), Math.floor(Math.random() * 4)));
        }
        return stars;
    }

    this.animate = function() {
        for (var i = 0; i < stars.length; ++i) {
            stars[i].update();
        }
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
        this.shoot();

        this.size = ship.size / 3;
        if (this.y <= 0) {
            this.y = 0;
        } else {
            this.y -= 4;
            this.draw();
        }
    }

    this.shoot = function()
    {
        if (shoot && bulletInterval >= 10) {
            bulletInterval = 0;
            bullets[bulletCount] = new Bullet(x_position + (ship.size / 2), ship.y - (ship.size / 2), ship.size / 3, ship.x);
            bulletCount++;
            shoot = false;
        }
    }

    this.animate = function() 
    {
        for (var i = 0; i < bullets.length; ++i) {
            bullets[i].update();
        }
    }
}

function Enemy(x, y, dy, size)
{
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.size = size;

    this.draw = function()
    {
        c.fillRect(this.x, this.y, 100, 100);
    }

    this.update = function()
    {
        this. y += dy;
        this.draw();
    }

    this.createNewEnemy = function()
    {
        console.log("");
        enemies.push(new Enemy(Math.floor(Math.random() * leftWidth), 0, Math.random() * 4, Math.random() * 4));
    }
}