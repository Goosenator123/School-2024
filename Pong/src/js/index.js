import '../styles/index.css';
import { Ball, Obstacle, Paddle, clearCanvas, getRandomIntegerFromRange } from './utility.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Initialize canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

// Game variables
let playerPaddle, aiPaddle, ball;
let points = { player: 0, ai: 0 };
let playerInput = { up: false, down: false };

// Player input event listeners
window.addEventListener('keydown', (event) => {
    if (event.key === 'w') playerInput.up = true;
    else if (event.key === 's') playerInput.down = true;
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'w') playerInput.up = false;
    else if (event.key === 's') playerInput.down = false;
});

// Paddle updates
function updateUserPaddle(targetPaddle) { // Player paddle
    let paddleDy = 0;
    const velocity = 10;

    if (playerInput.up && targetPaddle.y > 0) paddleDy = -velocity;
    else if (playerInput.down && targetPaddle.y + targetPaddle.height < canvas.height) paddleDy = velocity;

    targetPaddle.update(paddleDy);
}

function updateAiPaddle() { // AI paddle
    let paddleDy = 0;

    if (aiPaddle.y + aiPaddle.height / 2 < ball.y && aiPaddle.y + aiPaddle.height < canvas.height) {
        paddleDy = 7;
    } else if (aiPaddle.y + aiPaddle.height / 2 > ball.y && aiPaddle.y > 0) {
        paddleDy = -7;
    }

    aiPaddle.update(paddleDy);
}

// Ball and game state management
function checkGoal() {
    if (ball.x < 0) {
        console.log('AI scores: ' + points.ai);
        restartRound(false);
    } else if (ball.x > canvas.width) {
        console.log('Player scores: ' + points.player);
        restartRound(true);
    }
}

function restartRound(playerWin) {
    if (playerWin) points.player++;
    else points.ai++;

    setBall();
}

// Set ball properties
function setBall() {
    const ballRadius = 20;
    let ballDx, ballDy;

    do {
        ballDx = getRandomIntegerFromRange(-15, 15);
    } while (Math.abs(ballDx) < 10);
    
    do {
        ballDy = getRandomIntegerFromRange(-10, 10);
    } while (Math.abs(ballDy) < 5);

    ball = new Ball(window.innerWidth / 2, window.innerHeight / 2, ballRadius, ballDx, ballDy);
}

// Set paddle properties
function setPaddle() {
    const paddleWidth = 30;
    const paddleHeight = 150;
    const playerX = 20;
    const aiX = window.innerWidth - paddleWidth - 20;
    const y = window.innerHeight / 2 - paddleHeight / 2;

    playerPaddle = new Paddle(playerX, y, paddleWidth, paddleHeight);
    aiPaddle = new Paddle(aiX, y, paddleWidth, paddleHeight);
}

// Obstacle
let obstacles = [];
function setObstacle() {
    const obstacleRadius = 30;
    const canvasPadding = 200;

    for (let i = 0; i < 5; i++) {
        const x = getRandomIntegerFromRange((canvas.width - obstacleRadius - canvasPadding), (0 + canvasPadding));
        const y = getRandomIntegerFromRange((canvas.height - obstacleRadius - canvasPadding), (0 + canvasPadding));
        obstacles.push(new Obstacle(x, y, obstacleRadius));
    }
}

// Game loop
function animate() {
    requestAnimationFrame(animate);
    clearCanvas();
    updateUserPaddle(playerPaddle);
    updateAiPaddle();
    ball.update(playerPaddle, aiPaddle, obstacles);
    obstacles.forEach(obstacle => obstacle.draw());
    checkGoal();
}

// Initialize game
function startGame() {
    setCanvasSize();
    setPaddle();
    setBall();
    setObstacle();
    animate();
}

// Event listeners
window.onload = () => { // Start game when window is loaded
    startGame();
};

window.addEventListener('resize', () => { // Resize canvas when window is resized
    setCanvasSize();
    startGame();
});
