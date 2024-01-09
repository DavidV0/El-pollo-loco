class World {
  soundArray = [];
  mute = true;
  gamePaused = true;
  win = false;
  character = new Character();
  startGameBtn = document.getElementById('startGameBtn');
  level = level1;
  enemies = level1.enemies;
  backgroundObject = level1.backgroundObject;
  clouds = level1.clouds;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  titleScreen = new TitleScreen(720, 480);
  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.startGameBtn.addEventListener('click', () => this.startGame());
  }

  startGame() {
    this.character.fallsAsleep = 0;
    this.character.otherDirection = false;
    setTimeout(() => {
        this.character.speed = 5.5;
        this.startGameBtn.classList.remove('d-flex');
        this.startGameBtn.classList.add('d-none');
        this.gamePaused = false;
        this.mute = false;
        this.homeMenu = false;
        this.titleScreen = null;
        this.draw();
        this.setWorld();
        this.run();
    }, 200);
}

  run() {
    setInterval(() => {


      this.checkCollisions();
      this.checkThrowObjects();
     
    }, 200);
  }

  checkThrowObjects(){
    if(this.keyboard.D){
      let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions(){
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy)
      }
    });
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);
    this.addObjectsToMap(this.throwableObjects)

    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);

    // --------Space for fixed objects
    this.ctx.translate(-this.camera_x, 0); // Back
    this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0); // Forward
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.titleScreen)


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
        this.flipImage(mo);
      }
      mo.draw(this.ctx);

      mo.drawFrame(this.ctx);

      if (mo.otherDirection) {
        this.flipImageBack(mo);
      }
    } catch (e) {
      console.warn("Error loading Image");
      console.log("Could not load image,", this.img.src);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;

    this.ctx.restore();
  }
}
