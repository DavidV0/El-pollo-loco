
let canvas;
let world;
let keyboard = new Keyboard();
let startGameBtn = document.getElementById("startGameBtn");
let muteBtn = document.getElementById("muteBtn");
let fullcreenBtn = document.getElementById("fullscreenBtn");
let isFullscreen = false;
let isFullscreenBlocked = false;
let menuBtn = document.getElementById("menuBtn");


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
		canvas.requestFullscreen().catch(err => {
			console.error('Error attempting to enable fullscreen:', err);
		});
		
	}
}

// Listen for fullscreen change event and update the button text accordingly
document.addEventListener('fullscreenchange', function () {
	const isFullscreen = !!document.fullscreenElement;
});


/**
 * Changes the info view to the first page.
 */
function changeToFirstPage() {
    let firstPage = document.getElementById('first-page');
    let secondPage = document.getElementById('second-page');
    secondPage.innerHTML = '';
    firstPage.classList.remove('d-none');
}

/**
 * Changes the info view to the second page.
 */
function changeToSecondPage() {
    let firstPage = document.getElementById('first-page');
    let secondPage = document.getElementById('second-page');
    firstPage.classList.add('d-none');
    secondPage.innerHTML = /*html*/ `<p class="second-headline">Instructions</p><div class="story-text">Pepe can jump on the head of 
        the chickens and the chicks to 
        kill them. He can also kill them with the collected bottles. The final boss can be defeated with 
        several hits of the salsa bottles.</div><div class="back-box">
        <img src="./img/extern_imgs/back_arrow.png" alt="next-page-image"class="next-page-image" onclick="changeToFirstPage()">
        <div class="next-text">Back</div></div><div class="next-box"><div class="next-text">Next</div>
        <img src="./img/extern_imgs/forward_arrow.png" alt="next-page-image" class="next-page-image" onclick="changeToThirdPage()"></div>`;
}

/**
 * Changes the info view to the third page.
 */
function changeToThirdPage() {
    let secondPage = document.getElementById('second-page');
    secondPage.innerHTML = /*html*/ `<p class="second-headline">The Tales of the Chickens Rebellion</p><div class="story-text">
    The tranquil harmony between humans and chickens shattered when an enigmatic mutation infiltrated the nearby flocks, 
    rendering them defiant and formidable adversaries. Spearheaded by a colossal, 
    mutated rooster, the insurgent poultry wreaked havoc across the region. 
    Pepe stands as humanity's final beacon of hope....<br>
        <div class="back-box"><img src="./img/extern_imgs/back_arrow.png" 
        alt="next-page-image"class="next-page-image" onclick="changeToSecondPage()"><div class="next-text">Back</div></div>`;
}

document.addEventListener("keydown" , (e) =>{

	if(e.keyCode == 39){
		keyboard.RIGHT = true;
	}
	if(e.keyCode == 37){
		keyboard.LEFT = true;
	}
	if(e.keyCode == 38){
		keyboard.UP = true;
	}
	if(e.keyCode == 40){
		keyboard.DOWN = true;
	}
	if(e.keyCode == 32){
		keyboard.SPACE = true;
	}
	if(e.keyCode == 68){
		keyboard.D = true;
	}
})

document.addEventListener("keyup" , (e) =>{
	if(e.keyCode == 39){
		keyboard.RIGHT = false;
	}
	if(e.keyCode == 37){
		keyboard.LEFT = false;
	}
	if(e.keyCode == 38){
		keyboard.UP = false;
	}
	if(e.keyCode == 40){
		keyboard.DOWN = false;
	}
	if(e.keyCode == 32){
		keyboard.SPACE = false;
	}
	if(e.keyCode == 68){
		keyboard.D = false;
	}
})


