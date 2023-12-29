class MovableObject {
	x = 150;
	y = 300;
	height = 150;
	width = 100;
	img;
	speed = 0.15;
	imageCache = {};
	otherDirection = false;

	moveRight() {
		console.log('moving-right');
	}

	moveLeft() {
		setInterval(() => {
			this.x -= this.speed;
		  }, 1000/60);
	}

	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}

	/**
	 * 
	 * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
	 */
	loadImages(arr){
		arr.forEach((path )=> {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	}
}

	


