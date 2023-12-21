class Cloud extends MovableObject {
  y = 20;
  height = 250;
  width = 350;
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 700;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.x -= 0.15;
    }, 1000/60);
  }
}
