class MovableObject {
	x = 150;
	y = 300;
	height = 150;
	width = 100;
	img;
	imageCache = {};

	moveRight() {
		console.log('moving-right');
	}

	moveLeft() {}

	loadImage(path) {
		this.img = new Image();
		this.img.src = path;
	}

	/**
	 * 
	 * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
	 */
	loadImages(arr){
		arr.array.forEach((path )=> {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = path;
		});
	}
}

	


