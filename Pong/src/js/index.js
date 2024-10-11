import '../styles/index.css';
import { Ball, Paddle, clearCanvas } from './utility.js';
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();


let playerPaddle;
let aiPaddle;
let ball;

let playerInput = {
    up: false,
    down: false
}

function updateUserPaddle(targetPaddle) {
    let paddleDy = 0;
    let velocity = 10;
    switch (true) {
        case playerInput.up && playerInput.down:
            paddleDy = 0;
            targetPaddle.update(paddleDy);
            break;
        case playerInput.up && targetPaddle.y > 0:
            paddleDy = -velocity;
            targetPaddle.update(paddleDy);
            break;
        case playerInput.down && targetPaddle.y + targetPaddle.height < canvas.height:
            paddleDy = velocity;
            targetPaddle.update(paddleDy);
            break;
        default:
            paddleDy = 0;
            targetPaddle.update(paddleDy);
            break;
    }
}

function updateAiPaddle() {
    let paddleDy = 0;
    switch (true) {
        case aiPaddle.y + aiPaddle.height / 2 < ball.y && aiPaddle.y + aiPaddle.height < canvas.height:
            paddleDy = 10;
            break;
        case aiPaddle.y + aiPaddle.height / 2 > ball.y && aiPaddle.y > 0:
            paddleDy = -10;
            break;
        default:
            paddleDy = 0;
            break
    }
    aiPaddle.update(paddleDy);
}

function animate() {
    requestAnimationFrame(animate);
    clearCanvas();
    updateUserPaddle(playerPaddle);
    updateAiPaddle(aiPaddle);
    ball.update(playerPaddle, aiPaddle);
}


function setGame() {
    setCanvasSize();
    const width = 30;
    const height = 200;
    const playerX = 20;
    const aiX = window.innerWidth - width - 20;
    const y = window.innerHeight / 2 - height / 2;
    playerPaddle = new Paddle(playerX, y, width, height);
    aiPaddle = new Paddle(aiX, y, width, height);

    ball = new Ball(window.innerWidth / 2, window.innerHeight / 2, 20, 10, 10);
}

window.onload = () => {
    setGame();
    animate();
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        playerInput.up = true;
    } else if (event.key === 's') {
        playerInput.down = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        playerInput.up = false;
    } else if (event.key === 's') {
        playerInput.down = false;
    }
});