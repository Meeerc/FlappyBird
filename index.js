let pipes = [];
let bird;
let birdImg;
let backgroundImg;

function preload() {
    birdImg = loadImage('.idea/Flappy Bird (1).png');
    backgroundImg = loadImage('wp6957163.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bird = new Bird()

}

function draw() {
    image(backgroundImg, 0, 0, 10, 10);
    bird.show();
    bird.update();

    if (frameCount % 350 === 0) {
        pipes.push(new pipe());
    }
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }

    }


}

function keyPressed() {
    if (keyCode === 32) {
        bird.up();
    }
}


