

class pipe {

    constructor() {
        this.x = windowWidth;
        this.diff = 300;
        this.rand = random(0, windowHeight - this.diff);
        this.top = this.rand;
        this.bot = this.rand + this.diff;
        this.width = 80;

    }

    show() {
        rect(this.x, 0, this.width, this.top); //upper part of pipe
        imageMode(CORNER);
        image(upperPipeImg, this.x -20, this.top -390, 120, 400);
        rect(this.x, this.bot, this.width, windowHeight - this.bot); //lower part of pipe
        //image(lowerPipeImg, this.x -20, this.bot, 120, 400)
        if (this.hits(bird)) {
            frameRate(0);

        }
    }
    update() {
        this.x -= 15  ;
    }
    offscreen() {
        return this.x < -20;
    }
    hits(bird) {
        return (this.hitsTop(bird) || this.hitsBot(bird));
    }

    hitsTop(bird) {
        return (this.x < bird.x + bird.radius && this.x + this.width > bird.x - bird.radius && this.top > bird.y - bird.radius);
    }
    hitsBot(bird) {
        return (this.x < bird.x + bird.radius && this.x + this.width > bird.x - bird.radius && this.bot < bird.y + bird.radius);
    }
}