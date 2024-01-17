class LootableObject extends MovableObject { 

    /**
     * 
     * The constructor for lootable objects in the map like coins and bottles.
     *
     * @param {number} x - The x coordinate of the object on the map.
     * @param {number} y - The y coordinate of the object on the map.
     */
            constructor() { 
                super().loadImage('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
                this.y = 355;
                this.x = 200 + Math.random() * 500;;
                this.height = 100;
                this.width = 100;
            }
           }