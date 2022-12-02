class Bird {

    constructor() {
        this.g = 0.6
        this.x = 50;
        this.y = windowHeight / 2;
        this.speed = 0;
        this.gravity = this.g;
        this.radius = 30;
    }

    show() {
        circle(this.x, this.y, this.radius * 2);
        imageMode(CENTER);
        image(birdImg, this.x - (this.x/9), this.y, this.radius * 5, this.radius * 5);
    }

    update() {
        this.y += this.speed;
        this.speed += Math.sqrt(this.gravity);
        this.gravity = this.g;
        if (this.y + this.radius > height) {
            this.y = height - this.radius;

        }
        if (this.y + this.radius === height) {
            this.speed = 0;
        }
    }

    up() {
        if (abs(this.speed) < 75) {
            this.speed -= 20;
        }

    }

    dead() {

        background(255, 0, 0);
        frameRate(0);

    }

}