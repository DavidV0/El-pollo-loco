class MovableObject {
	x = 150;
	y = 300;
	height = 150;
	width = 100;
	img;

	moveRight() {
		console.log('moving-right');
	}

	moveLeft() {}

	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}
}
