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
let points = { player1: 0, player2: 0 };
let playerInput = { up: false, down: false };
let isGameOn = false;
let obstacles = [];
let colorIndex = 0;
let ballAcceleration = 1.0001;

// Game settings
let setColor, setDifficulty, obstacleState, maxObstacles;

// Difficulty settings
const difficultyObject = {
    'easy': { playerSpeed: 10, aiSpeed: 5, playerPaddleHeight: 200, aiPaddleHeight: 200 },
    'medium': { playerSpeed: 10, aiSpeed: 7, playerPaddleHeight: 150, aiPaddleHeight: 200 },
    'hard': { playerSpeed: 10, aiSpeed: 9, playerPaddleHeight: 100, aiPaddleHeight: 200 },
};

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
    canvas.height = window.innerHeight * 0.8;
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
    const paddleDy = playerInput.up > 0 ? -velocity : playerInput.down ? velocity : 0;
    targetPaddle.update(paddleDy);
}

// Update AI paddle to follow the ball
function updateAiPaddle(targetPaddle) {
    const aiSpeed = difficultyObject[setDifficulty].aiSpeed;
    const paddleDy = targetPaddle.y + targetPaddle.height / 2 < ball.y ? aiSpeed : targetPaddle.y + targetPaddle.height / 2 > ball.y ? -aiSpeed : 0;
    targetPaddle.update(paddleDy);
}

// Check if a goal has been scored
function checkGoal() {
    if (ball.x < 0 || ball.x > canvas.width) restartRound(ball.x > canvas.width);
}

// Restart round with score update
function restartRound(playerWin1) {
    if (playerWin1) points.player1++;
    else points.player2++;
    document.getElementById('player1-score').textContent = points.player1;
    document.getElementById('player2-score').textContent = points.player2;
    setBall();
}

// Initialize ball properties
let timeOutId; // Timeout ID for ball launch
function setBall() {
    const ballRadius = 20;
    let ballDx, ballDy;

    // Set ball speed based on difficulty
    do {
        ballDx = getRandomIntegerFromRange(-15, 15);
    } while (Math.abs(ballDx) < 10);
    
    do {
        ballDy = getRandomIntegerFromRange(-10, 10);
    } while (Math.abs(ballDy) < 5);

    // If timeout is already set, clear it
    if (timeOutId) clearTimeout(timeOutId);

    // Set ball to center of canvas
    ball = new Ball(canvas.width / 2, canvas.height / 2, ballRadius, 0, 0, colorObject[setColor]);

    // Launch ball after 1 second
    timeOutId = setTimeout(() => ball = new Ball(canvas.width / 2, canvas.height / 2, ballRadius, ballDx, ballDy, colorObject[setColor]), 1000);
}

// Initialize paddle properties
function setPaddle() {
    const paddleWidth = 30;
    const playerPaddleHeight = difficultyObject[setDifficulty].playerPaddleHeight;
    const aiPaddleHeight = difficultyObject[setDifficulty].aiPaddleHeight;
    const playerX = 60;
    const aiX = canvas.width - paddleWidth - 60;
    const playerY = canvas.height / 2 - playerPaddleHeight / 2;
    const aiY = canvas.height / 2 - aiPaddleHeight / 2;

    playerPaddle = new Paddle(playerX, playerY, paddleWidth, playerPaddleHeight);
    aiPaddle = new Paddle(aiX, aiY, paddleWidth, aiPaddleHeight);
}

// Initialize obstacle properties
function setObstacle() {
    obstacles = [];
    const obstacleRadius = 30;
    const canvasPadding = 300;

    while (obstacles.length < maxObstacles && obstacleState === 'on') {
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
// Change color on button click
for (const button of colorButtons) {
    button.addEventListener('click', () => {
        setColor = button.value;
        startGame();
    });
}

// Change difficulty on button click
for (const button of difficultyButtons) {
    button.addEventListener('click', () => {
        setDifficulty = button.value;
        startGame();
    });
}

// Change obstacle state on button click
for (const button of obstacleButtons) {
    button.addEventListener('click', () => {
        obstacleState = button.value;
        startGame();
    });
}

// Change obstacle quantity based on input value
obstacleQuantityInput.addEventListener('input', (event) => {
    maxObstacles = Number(event.target.value) + 1;
    if (obstacleState === 'on') startGame();
});

// Resize canvas on window resize
window.addEventListener('resize', () => { 
    setCanvasSize();
    startGame();
});

// Player paddle movement on key press
window.addEventListener('keydown', (event) => {
    if (isGameOn && (event.key === 'w' || event.key === 's')) playerInput[event.key === 'w' ? 'up' : 'down'] = true;
});

window.addEventListener('keyup', (event) => {
    if (isGameOn && (event.key === 'w' || event.key === 's')) playerInput[event.key === 'w' ? 'up' : 'down'] = false;
});

//! ====== Game Functions ======
function animate(timestamp) {
    clearCanvas();

    // ballAcceleration += 0.001;
    ball.update(playerPaddle, aiPaddle, obstacles, ballAcceleration);
    obstacles.forEach(obstacle => obstacle.update());

    isGameOn ? updateUserPaddle(playerPaddle) : updateAiPaddle(playerPaddle);
    updateAiPaddle(aiPaddle);
    checkGoal();

    requestAnimationFrame(animate);
}

function startGame() {
    setCanvasSize();
    setPaddle();
    setBall();
    setObstacle();
}

// ====== Initialization ======
setInterval(() => applyColorToElements(setColor), 1000);
getStoredSettings();
startGame();
requestAnimationFrame(animate);