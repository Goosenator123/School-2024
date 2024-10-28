const defaultSettings = {
    difficulty: 'medium',
    color: 'red',
    obstacle: 'on',
    obstacleNumber: 5,
};

const easyButton = document.getElementById('easy-button');
const mediumButton = document.getElementById('medium-button');
const hardButton = document.getElementById('hard-button');

const difficultyButtons = {
    easy: document.getElementById('easy-button'),
    medium: document.getElementById('medium-button'),
    hard: document.getElementById('hard-button'),
}

function setDefaultSettings() {
    console.log('setting default settings');
    localStorage.setItem('pongSettings', JSON.stringify(defaultSettings));
    loadSettings();
}

function enableDifficulty(difficulty) {
    for (const key in difficultyButtons) {
        difficultyButtons[key].classList.toggle(`${key}-enabled`, key === difficulty);
    }
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('pongSettings'));
    console.log('loading settings', settings);
    enableDifficulty(settings.difficulty);
}

window.onload = () => {
    localStorage.getItem('pongSettings') ? loadSettings() : setDefaultSettings();
}

