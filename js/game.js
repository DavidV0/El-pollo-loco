let canvas;
let world;
let keyboard = new Keyboard();
let startGameBtn = document.getElementById('startGameBtn');
let muteBtn = document.getElementById('muteBtn');
let fullcreenBtn = document.getElementById('fullscreenBtn');
let isFullscreen = false;
let isFullscreenBlocked = false;
let menuBtn = document.getElementById('menuBtn');
let playMusic = false;

function init() {
	canvas = document.getElementById('canvas');
	world = new World(canvas, keyboard);
	ctx = canvas.getContext('2d');
	console.log('My character is ', world.character);
}

function toggleFullscreen() {
	if (document.fullscreenElement) {
		// If the document is currently in fullscreen, exit fullscreen
		document.exitFullscreen();
	} else {
		// If not in fullscreen, request fullscreen on the canvas
		canvas.requestFullscreen().catch((err) => {
			console.error('Error attempting to enable fullscreen:', err);
		});
	}
}

// Listen for fullscreen change event and update the button text accordingly
document.addEventListener('fullscreenchange', function () {
	const isFullscreen = !!document.fullscreenElement;
});

function openMenu() {}

function toggleMusic() {
	if (playMusic === true) {
		muteBtn.src = './img/start_screen_buttons/mute.svg';
		playMusic = false;
	} else if (playMusic === false) {
		muteBtn.src = './img/start_screen_buttons/unmute.svg';
		playMusic = true;
	}
}

document.addEventListener('keydown', (e) => {
	if (e.keyCode == 39) {
		keyboard.RIGHT = true;
	}
	if (e.keyCode == 37) {
		keyboard.LEFT = true;
	}
	if (e.keyCode == 38) {
		keyboard.UP = true;
	}
	if (e.keyCode == 40) {
		keyboard.DOWN = true;
	}
	if (e.keyCode == 32) {
		keyboard.SPACE = true;
	}
	if (e.keyCode == 68) {
		keyboard.D = true;
	}
});

document.addEventListener('keyup', (e) => {
	if (e.keyCode == 39) {
		keyboard.RIGHT = false;
	}
	if (e.keyCode == 37) {
		keyboard.LEFT = false;
	}
	if (e.keyCode == 38) {
		keyboard.UP = false;
	}
	if (e.keyCode == 40) {
		keyboard.DOWN = false;
	}
	if (e.keyCode == 32) {
		keyboard.SPACE = false;
	}
	if (e.keyCode == 68) {
		keyboard.D = false;
	}
});
