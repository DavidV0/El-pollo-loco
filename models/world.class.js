class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
  ctx;
  canvas;
  keyboard;
  clouds = [new Cloud(), new Cloud(), new Cloud()];
  camera_x = 0;
  backgroundObject = [
    new BackgroundObject("./img/5_background/layers/air.png", 0, 80),

    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/1.png",
      0,
      80
    ),

    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/1.png",
      0,
      80
    ),

    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/1.png",
      0,
      80
    ),
  ];
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.ctx.translate(this.camera_x, 0)
    this.addObjectsToMap(this.backgroundObject);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);
	this.ctx.translate(-this.camera_x, 0)


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
    try {
      if (mo.otherDirection) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
		mo.x = mo.x* -1
      }
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

	  if(mo.otherDirection){
		mo.x = mo.x* -1

		this.ctx.restore();
	  }
    } catch (e) {
      console.warn("Error loading Image");
      console.log("Could not load image,", this.img.src);
    }
  }
}
