/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/js/setting.js ***!
  \***************************/
// Default settings for the game, used if no previous settings are found in local storage
const defaultSettings = {
    difficulty: 'medium',
    color: 'red',
    obstacleState: 'on',
    obstacleNumber: 5,
};

// HTML elements grouped by settings type
const settingButtonsObject = {
    difficulty: {
        easy: document.getElementById('easy-button'),
        medium: document.getElementById('medium-button'),
        hard: document.getElementById('hard-button'),
    },
    color: {
        red: document.getElementById('red-option'),
        green: document.getElementById('green-option'),
        blue: document.getElementById('blue-option'),
    },
    obstacleState: {
        on: document.getElementById('on-button'),
        off: document.getElementById('off-button'),
    }
};

// Other HTML elements
const obstacleQuantityInput = document.getElementById('obstacle-quantity-input');
const obstacleQuantityDisplay = document.getElementById('obstacle-quantity');

// Set default settings in local storage
function setDefaultSettings() {
    localStorage.setItem('pongSettings', JSON.stringify(defaultSettings));
    loadSettings();
}

// Load settings from local storage and update the UI to reflect the stored settings
function loadSettings() {
    const storedSettings = JSON.parse(localStorage.getItem('pongSettings'));
    // Apply the stored setting value to each button group 
    for (const buttonGroup in settingButtonsObject) {
        const storedSettingsValue = storedSettings[buttonGroup];
        toggleButton(settingButtonsObject[buttonGroup], storedSettingsValue);
    }
    // Display corresponding obstacle number stored in local storage
    updateObstacleNumber(storedSettings.obstacleNumber);
}

// Toggle button states based on the current active button in each group
function toggleButton(targetButtonGroup, targetButton) {
    // Loop through each button in the group to set the active state
    for (const button in targetButtonGroup) {
        // Toggle class for the target button; remove it from others in the group
        targetButtonGroup[button].classList.toggle(`${button}-enabled`, button === targetButton);
    }
}

// Update a specific setting in local storage and apply the new button state
function updateSetting(targetSetting, newSettingValue) {
    const storedSettings = JSON.parse(localStorage.getItem('pongSettings'));
    // Update the setting value in local storage
    storedSettings[targetSetting] = newSettingValue;
    localStorage.setItem('pongSettings', JSON.stringify(storedSettings));
    // Update the UI to reflect the new setting
    toggleButton(settingButtonsObject[targetSetting], newSettingValue);
}

// Update the number of obstacles in local storage and what is displayed on the UI
function updateObstacleNumber(quantity) {
    const storedSettings = JSON.parse(localStorage.getItem('pongSettings'));
    // Update UI based on quantity of obstacles then store it
    storedSettings.obstacleNumber = quantity;
    obstacleQuantityDisplay.textContent = quantity;
    obstacleQuantityInput.value = quantity - 1;
    localStorage.setItem('pongSettings', JSON.stringify(storedSettings));
}

// Bind event listeners to each button to allow settings updates on click
function bindEventListeners() {
    // Loop through each setting group (difficulty, color, obstacleState)
    for (const setting in settingButtonsObject) {
        const buttonGroup = settingButtonsObject[setting];
        // Loop through each button in the group to attach a click event listener
        for (const button in buttonGroup) {
            // On click, update the specific setting with the selected button value
            buttonGroup[button].addEventListener('click', () => updateSetting(setting, button));
        }
    }
}

// Initialize settings and event listeners on page load
window.onload = () => {
    // Load stored settings if available, otherwise apply default settings
    localStorage.getItem('pongSettings') ? loadSettings() : setDefaultSettings();
    bindEventListeners();
}

// Execute upon new input 
obstacleQuantityInput.addEventListener('input', (event) => {
    const value = Number(event.target.value) + 1;
    updateObstacleNumber(value);
})
/******/ })()
;
//# sourceMappingURL=setting139792cb16911edc55a8.js.map