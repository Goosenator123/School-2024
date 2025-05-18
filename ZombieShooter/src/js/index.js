// Imports
import '../styles/index.css';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.style.display = 'none'; // Hide canvas initially

// Pointer lock controls
const controls = new PointerLockControls(camera, renderer.domElement);

// Player
const player = { position: new THREE.Vector3(0, 1, 0), health: 100, score: 0 };
camera.position.set(0, 1, 0);
const moveSpeed = 0.1;
const keys = {};

// Zombies
const zombies = [];
const zombieSpeed = 0.02;
const maxZombies = 10;

// Bullets
const bullets = [];
const bulletSpeed = 0.5;
const bulletLifetime = 2; // seconds

// Floor
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Lighting
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Shooting
document.addEventListener('click', () => {
    if (controls.isLocked) { // Only shoot when mouse is locked
        const bulletGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const bulletMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
        bullet.position.copy(camera.position);
        bullet.direction = new THREE.Vector3();
        camera.getWorldDirection(bullet.direction);
        bullet.time = 0;
        scene.add(bullet);
        bullets.push(bullet);
    }
});

// Keyboard input
document.addEventListener('keydown', (e) => keys[e.code] = true);
document.addEventListener('keyup', (e) => keys[e.code] = false);

// Spawn zombies
function spawnZombie() {
    if (zombies.length >= maxZombies) return;
    const zombieGeometry = new THREE.BoxGeometry(1, 2, 1);
    const zombieMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const zombie = new THREE.Mesh(zombieGeometry, zombieMaterial);
    const angle = Math.random() * Math.PI * 2;
    const radius = 20;
    zombie.position.set(Math.cos(angle) * radius, 1, Math.sin(angle) * radius);
    zombie.health = 3;
    scene.add(zombie);
    zombies.push(zombie);
}

// Game loop
let isGameRunning = false;
let zombieSpawnInterval = null;
function animate() {
    if (!isGameRunning) return; // Stop animation if game is not running
    requestAnimationFrame(animate);

    // Player movement
    const direction = new THREE.Vector3();
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();
    
    // Get camera's forward and right vectors (ignore Y for ground-based movement)
    camera.getWorldDirection(forward);
    forward.y = 0; // Keep movement on XZ plane
    forward.normalize();
    right.copy(forward).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2); // Rotate 90 degrees for right vector

    // Apply WASD input relative to camera direction
    if (keys['KeyW']) direction.add(forward);
    if (keys['KeyS']) direction.sub(forward);
    if (keys['KeyA']) direction.add(right);
    if (keys['KeyD']) direction.sub(right);
    
    // Normalize and scale movement
    if (direction.length() > 0) {
        direction.normalize().multiplyScalar(moveSpeed);
        controls.getObject().position.add(direction);
    }

    // Update bullets
    bullets.forEach((bullet, i) => {
        bullet.position.addScaledVector(bullet.direction, bulletSpeed);
        bullet.time += 1 / 60;
        if (bullet.time > bulletLifetime) {
            scene.remove(bullet);
            bullets.splice(i, 1);
        } else {
            zombies.forEach((zombie, j) => {
                if (bullet.position.distanceTo(zombie.position) < 1) {
                    zombie.health -= 1;
                    if (zombie.health <= 0) {
                        scene.remove(zombie);
                        zombies.splice(j, 1);
                        player.score += 10;
                    }
                    scene.remove(bullet);
                    bullets.splice(i, 1);
                }
            });
        }
    });

    // Update zombies
    zombies.forEach(zombie => {
        const direction = camera.position.clone().sub(zombie.position).normalize();
        zombie.position.addScaledVector(direction, zombieSpeed);
        if (zombie.position.distanceTo(camera.position) < 1) {
            player.health -= 1;
            if (player.health <= 0) {
                isGameRunning = false; // Stop game loop
                clearInterval(zombieSpawnInterval); // Stop spawning zombies
                document.getElementById('finalScore').innerText = `Final Score: ${player.score}`;
                document.getElementById('gameOver').classList.remove('hidden');
                document.getElementById('info').classList.add('hidden');
                document.getElementById('crosshair').classList.add('hidden');
                renderer.domElement.style.display = 'none';
                controls.unlock(); // Unlock mouse
            }
        }
    });

    // Update UI
    document.getElementById('info').innerText = `Score: ${player.score} | Health: ${player.health}`;

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start game when play button is clicked
document.getElementById('playButton').addEventListener('click', () => {
    // Hide menu, show game elements
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('info').classList.remove('hidden');
    document.getElementById('crosshair').classList.remove('hidden');
    renderer.domElement.style.display = 'block';
    
    // Reset game state
    player.health = 100;
    player.score = 0;
    zombies.forEach(z => scene.remove(z));
    zombies.length = 0;
    bullets.forEach(b => scene.remove(b));
    bullets.length = 0;
    camera.position.set(0, 1, 0);
    
    // Start game
    isGameRunning = true;
    controls.lock();
    animate();
    zombieSpawnInterval = setInterval(spawnZombie, 5000);
});

// Return to menu when game over
document.getElementById('backToMenu').addEventListener('click', () => {
    // Hide game over, show menu
    document.getElementById('gameOver').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
    
    // Reset game state
    player.health = 100;
    player.score = 0;
    zombies.forEach(z => scene.remove(z));
    zombies.length = 0;
    bullets.forEach(b => scene.remove(b));
    bullets.length = 0;
    camera.position.set(0, 1, 0);
});