//! ====== Imports ======
import '../styles/index.css';
import '../styles/setting.css';
import { Ball, Obstacle, Paddle, clearCanvas, getRandomIntegerFromRange, getDistance } from './utility.js';

//! ====== Constants and DOM Elements ======
const canvas = document.getElementById('game-canvas');
const colorButtons = document.getElementsByClassName('color-button');
const difficultyButtons = document.getElementsByClassName('difficulty-button');
const obstacleButtons = document.getElementsByClassName('obstacle-button');
const obstacleQuantityInput = document.getElementById('obstacle-quantity-input');

const {
    gameTitle,
    startButton,
    startButton2,
    footerText,
    settingIcon,
    settingSection,
    settingTitle,
    difficultyTitle,
    colorTitle,
    obstacleTitle,
    settingHeader,
    difficultySection,
    colorSection,
} = {
    gameTitle: document.getElementById('game-title'),
    startButton: document.getElementById('start-button'),
    startButton2: document.getElementById('start-button2'),
    footerText: document.getElementById('footer-text'),
    settingIcon: document.getElementById('setting-icon'),
    settingSection: document.getElementById('setting-section'),
    settingTitle: document.getElementById('setting-title'),
    difficultyTitle: document.getElementById('difficulty-title'),
    colorTitle: document.getElementById('color-title'),
    obstacleTitle: document.getElementById('obstacle-title'),
    settingHeader: document.getElementById('setting-header'),
    difficultySection: document.getElementById('difficulty-section'),
    colorSection: document.getElementById('color-section'),
};

//! ====== Game State Variables ======
let playerPaddle, aiPaddle, ball;
let points = { player: 0, ai: 0 };
let playerInput = { up: false, down: false };
let isGameOn = false;
let obstacles = [];
let colorIndex = 0;

// Game settings
let setColor, setDifficulty, obstacleState, maxObstacles;

//! ====== Color Arrays ======
const colorObject = {
    'red': ['hsl(0, 100%, 20%)', 'hsl(0, 100%, 30%)', 'hsl(39, 100%, 50%)', 'hsl(40, 100%, 53%)', 'hsl(40, 100%, 60%)'],
    'blue': ['hsl(210, 100%, 20%)', 'hsl(210, 100%, 40%)', 'hsl(200, 100%, 40%)', 'hsl(194, 100%, 45%)', 'hsl(195, 100%, 85%)'],
    'green': ['hsl(160, 100%, 10%)', 'hsl(120, 100%, 20%)', 'hsl(120, 100%, 25%)', 'hsl(140, 100%, 40%)', 'hsl(120, 100%, 50%)']
};

//! ====== Utility Functions ======
// Initialize canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
}

// Apply color to various elements
function applyColorToElements(color) {
    const colorValue = colorObject[color][colorIndex % colorObject[color].length];
    const elementsToColor = [gameTitle, footerText, settingIcon, settingTitle, difficultyTitle, colorTitle, obstacleTitle];
    const elementsWithBorder = [startButton, startButton2, settingSection, settingHeader, difficultySection, colorSection];

    elementsToColor.forEach(element => (element.style.color = colorValue));
    elementsWithBorder.forEach(element => (element.style.borderColor = colorValue));
    colorIndex++;
}

// Retrieve stored game settings
function getStoredSettings() {
    const storedSettings = JSON.parse(localStorage.getItem("pongSettings"));
    obstacleState = storedSettings.obstacleState;
    maxObstacles = storedSettings.obstacleNumber;
    setColor = storedSettings.color;
    setDifficulty = storedSettings.difficulty;
}

// Update paddle position based on input
function updateUserPaddle(targetPaddle) {
    const velocity = 10;
    const paddleDy = playerInput.up && targetPaddle.y > 0 ? -velocity : playerInput.down && targetPaddle.y + targetPaddle.height < canvas.height ? velocity : 0;
    targetPaddle.update(paddleDy);
}

// Update AI paddle to follow the ball
function updateAiPaddle(targetPaddle) {
    const paddleDy = targetPaddle.y + targetPaddle.height / 2 < ball.y ? 7 : targetPaddle.y + targetPaddle.height / 2 > ball.y ? -7 : 0;
    targetPaddle.update(paddleDy);
}

// Check if a goal has been scored
function checkGoal() {
    if (ball.x < 0 || ball.x > canvas.width) restartRound(ball.x > canvas.width);
}

// Restart round with score update
function restartRound(playerWin) {
    if (playerWin) points.player++;
    else points.ai++;
    setBall();
}

// Initialize ball properties
function setBall() {
    const ballRadius = 20;
    let ballDx, ballDy;

    do {
        ballDx = getRandomIntegerFromRange(-15, 15);
    } while (Math.abs(ballDx) < 10);
    
    do {
        ballDy = getRandomIntegerFromRange(-10, 10);
    } while (Math.abs(ballDy) < 5);

    const ballColor = 
    ball = new Ball(canvas.width / 2, canvas.height / 2, ballRadius, 0, 0);
    setTimeout(() => ball = new Ball(canvas.width / 2, canvas.height / 2, ballRadius, ballDx, ballDy), 1000);
}

// Initialize paddle properties
function setPaddle() {
    const paddleWidth = 30;
    const paddleHeight = 150;
    const playerX = 60;
    const aiX = canvas.width - paddleWidth - 60;
    const y = canvas.height / 2 - paddleHeight / 2;

    playerPaddle = new Paddle(playerX, y, paddleWidth, paddleHeight);
    aiPaddle = new Paddle(aiX, y, paddleWidth, paddleHeight);
}

// Initialize obstacle properties
function setObstacle() {
    obstacles = [];
    const obstacleRadius = 30;
    const canvasPadding = 200;

    while (obstacles.length < maxObstacles) {
        const obstacleColor = colorObject[setColor][getRandomIntegerFromRange(0, colorObject[setColor].length - 1)];
        const x = getRandomIntegerFromRange(obstacleRadius + canvasPadding, canvas.width - obstacleRadius - canvasPadding);
        const y = getRandomIntegerFromRange(obstacleRadius + canvasPadding, canvas.height - obstacleRadius - canvasPadding);
        const dy = getRandomIntegerFromRange(-3, 3);
        if (!obstacles.some(obstacle => getDistance({ x, y }, obstacle) < obstacleRadius * 2) && dy !== 0) {
            obstacles.push(new Obstacle(x, y, obstacleRadius, dy, obstacleColor));
        }
    }
}

//! ====== Event Listeners ======
for (const button of colorButtons) {
    button.addEventListener('click', () => setColor = button.value);
}

window.addEventListener('resize', () => { 
    setCanvasSize();
    startGame();
});

window.addEventListener('keydown', (event) => {
    if (isGameOn && (event.key === 'w' || event.key === 's')) playerInput[event.key === 'w' ? 'up' : 'down'] = true;
});

window.addEventListener('keyup', (event) => {
    if (isGameOn && (event.key === 'w' || event.key === 's')) playerInput[event.key === 'w' ? 'up' : 'down'] = false;
});

for (const button of difficultyButtons) {
    button.addEventListener('click', () => setDifficulty = button.value);
}

//! ====== Game Functions ======
function animate() {
    requestAnimationFrame(animate);
    clearCanvas();

    ball.update(playerPaddle, aiPaddle, obstacles);
    obstacles.forEach(obstacle => obstacle.update());

    isGameOn ? updateUserPaddle(playerPaddle) : updateAiPaddle(playerPaddle);
    updateAiPaddle(aiPaddle);
    checkGoal();
}

function startGame() {
    getStoredSettings();
    setCanvasSize();
    setPaddle();
    setBall();
    setObstacle();
}

// ====== Initialization ======
setInterval(() => applyColorToElements(setColor), 1000);
startGame();
animate();