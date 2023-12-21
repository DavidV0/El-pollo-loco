class Chicken extends MovableObject {
	height = 80;
	y = 355;
	width = 100;
	constructor() {
		super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
		this.x = 200 + Math.random() * 500;
	}
}
