const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');


function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();