/**
 * Represents the title screen of the game.
 * @class
 */
class TitleScreen extends DrawAbleObject {
  titleImage = "./img/9_intro_outro_screens/start/startscreen_1.png";

  constructor(width, height) {
    super();
    this.loadImage(this.titleImage);
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }
}
