class Character extends MovableObject {
  height = 280;
  y = 155;
  speed = 10;
  IMAGES_WALKING = [
    "./img/2_character_pepe/2_walk/W-21.png",
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
  ];

  currentImage = 0;
  world;
  walking_sound = new Audio("./audio/walking.mp3")
  constructor() {
    super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
 
    setInterval(()=> {
      this.walking_sound.pause();

      if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x ){
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
      }
      if(this.world.keyboard.LEFT && this.x >0){
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();

      }
      this.world.camera_x = -this.x +100
    },1000/60);
 
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.x += this.speed;

        // Walk animation
        this.playAnimation(this.IMAGES_WALKING)
      }
    }, 50);
  }

  jump() {}
}
