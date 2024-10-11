const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

class Ball {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = 'red';
        this.dx = dx;
        this.dy = dy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(playerPaddle, aiPaddle) {
        if (this.x - this.radius < playerPaddle.x + playerPaddle.width && this.y > playerPaddle.y && this.y < playerPaddle.y + playerPaddle.height && this|| this.x + this.radius > aiPaddle.x && this.y > aiPaddle.y && this.y < aiPaddle.y + aiPaddle.height) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height  || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

class Paddle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    update(value) {
        this.y += value;   
        this.draw();
    }
}


function clearCanvas() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

function getRandomIntegerFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { Ball, Paddle, clearCanvas, getRandomIntegerFromRange };