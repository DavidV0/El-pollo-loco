
let canvas;
let world;
let keyboard = new Keyboard();
let startGameBtn = document.getElementById("startGameBtn");
let muteBtn = document.getElementById("muteBtn");
let fullscreenBtn = document.getElementById("fullscreenBtn");
let menuBtn = document.getElementById("menuBtn");


function init() {
	canvas = document.getElementById('canvas');
	world = new World(canvas, keyboard);
	ctx = canvas.getContext('2d');
	loadButtons();
	console.log('My character is ', world.character);
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


function loadButtons(){

}
