

class pipe {

    constructor() {
        this.x = windowWidth ;
        this.diff = 200;
        this.rand = random(0, windowHeight - this.diff);
        this.top = this.rand;
        this.bot = this.rand + this.diff;
        this.width = 50;

    }

    show() {
        rect(this.x, 0, this.width, this.top); //upper part of pipe
        rect(this.x, this.bot, this.width, windowHeight - this.bot); //lower part of pipe
    }
    update() {
        this.x -= 3  ;
    }
    offscreen() {
        return this.x < -20;
    }
    hits(bird) {
        if (bird.x + bird.radius - (this.x + this.width) < 0 && bird.y + bird.radius > this.bot && bird.y + bird.radius < this.top) {
            console.log("1");
        }
    }
}