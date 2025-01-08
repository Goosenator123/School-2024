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
let isJumping = false;
let jumpCooldown = false;
let groundLevel = canvas.height / 2;

// Gravity Variables
let gravity = 1;
const gravityAcceleration = 0.5;
const initialGravity = 1;

// Jumping variables;
let jumpSpeed = 14;
const initialJumpSpeed = 14;
const jumpSlowdown = 0.5;

// Function that clears the canvas
function clearCanvas() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

// Function that sets rectangle
function setRectangle() {
    const x = canvas.width / 4 - rectWidth;
    const y = canvas.height / 2 - rectHeight;
    rectangle = new Rectangle(x, y, rectWidth, rectHeight);
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
        if (isJumping) {
            if (jumpSpeed <= 1) isJumping = false;
            this.y -= jumpSpeed;
            jumpSpeed -= jumpSlowdown;
            this.draw();
            return;
        }

        if (this.y + (rectHeight + 10) <= groundLevel && !isJumping) {
            this.y += gravity;
            if (gravity < 14) gravity += gravityAcceleration;          
            console.log(gravity)
        } else {
            jumpCooldown = false;
        }

        this.draw();
    }
}

function setGround() {
    groundLevel = canvas.height / 2;
    ctx.beginPath();
    ctx.moveTo(0, groundLevel);
    ctx.lineTo(canvas.width, groundLevel);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
setGround();

function animate() {
    requestAnimationFrame(animate);
    clearCanvas();
    rectangle.update();
    setGround();
}

window.onload = () => {
    setRectangle();
    animate();
    setGround();
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'w' && !jumpCooldown) {
        gravity = initialGravity;
        jumpSpeed = initialJumpSpeed
        isJumping = true;
        jumpCooldown = true;
    }
});

window.addEventListener('resize', () => {
    setCanvasSize();
    setRectangle();
});