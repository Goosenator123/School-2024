import "../styles/index.css";

// Canvas Variables
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

// Function to set the size of the canvas to match the window size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize(); // Call the function to set the initial canvas size

// Game Variables
let rectangle;
const rectWidth = 50;
const rectHeight = 50;

// Direction Variable
let directionPressed = {
    'w': false,
    'a': false,
    's': false,
    'd': false,
};


// Function that clears the canvas
function clearCanvas() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

class Rectangle {
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

    update() {
        if (directionPressed['a']) this.x -= 5;
        if (directionPressed['d']) this.x += 5;
        if (directionPressed['w']) this.y -= 5;
        if (directionPressed['s']) this.y += 5;

        this.draw();
    }
}

class Obstacle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.y += this.dy;
        this.x += this.dx;
        this.draw();
    }
}

// Function that checks collision
function checkCollision(player, obstacle) {
    
}

// Function that sets rectangle
function setRectangle() {
    const x = canvas.width / 2 - rectWidth;
    const y = canvas.height - rectHeight - 50;
    rectangle = new Rectangle(x, y, rectWidth, rectHeight);
}

function startGame() {
    setInterval(() => {
        createObstacle();
    }, 1000);
}

// Function that sets the obstacles
let obstacleArray = [];
function createObstacle() {
    const y = -10;
    const dy = 3;
    const radius = 20;
    const x = getRandomIntFromRange(0, canvas.width);
    const dx = getRandomIntFromRange(-1, 1);
    obstacleArray.push(new Obstacle(x, y, dx, dy, radius));
}

function getRandomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function that recurse animate function
function animate() {
    requestAnimationFrame(animate);
    clearCanvas();
    rectangle.update();
    for (let i = 0; i < obstacleArray.length; i++) {
        obstacleArray[i].update();
        if (obstacleArray[i].y >= canvas.height) obstacleArray.splice(i, 1);
    }

    console.log(directionPressed)
}

window.onload = () => {
    setRectangle();
    animate();
    startGame();
}


window.addEventListener('keydown', (event) => {
    if (['w', 'a', 's', 'd'].includes(event.key)) directionPressed[event.key] = true;
});

window.addEventListener('keyup', (event) => {
    if (['w', 'a', 's', 'd'].includes(event.key)) directionPressed[event.key] = false;
})

window.addEventListener('resize', () => {
    setCanvasSize();
    setRectangle();
});

