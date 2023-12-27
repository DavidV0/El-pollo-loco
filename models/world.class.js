class World {
	character = new Character();
	enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
	ctx;
	canvas;

	clouds = [new Cloud(), new Cloud(), new Cloud()];
	backgroundObject = [
		new BackgroundObject('img/5_background/layers/air.png', 0, 80),

		new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0, 80),

		new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0, 80),

		new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0, 80),
	];
	constructor(canvas) {
		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.draw();
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.addObjectsToMap(this.backgroundObject);
		this.addObjectsToMap(this.clouds);
		this.addObjectsToMap(this.enemies);
		this.addToMap(this.character);

		//Draw() wird immer wieder aufgerufen
		let self = this;
		requestAnimationFrame(function () {
			self.draw();
		});

		
	}

	addObjectsToMap(objects) {
		objects.forEach((obj) => {
			this.addToMap(obj);
		});
	}

	addToMap(mo) {
		try{
			this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
				
			}catch(e){
				console.warn("Error loading Image")
				console.log("Could not load image," , this.img.src)
			}
	}
}