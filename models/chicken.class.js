class Chicken extends MovableObject {
  height = 80;
  y = 355;
  width = 100;
  currentImage = 0;
  IMAGES_WALKING = [
	'./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
	'./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
	'./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',

  ];

  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.speed = 0.15 + Math.random() * 0.45
    this.x = 200 + Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }
}
