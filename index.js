let pipes = [];
let bird;
let birdImg;
let backgroundImg, upperPipeImg, lowerPipeImg;

function preload() {
    birdImg = loadImage('.idea/Flappy Bird (1).png');
    backgroundImg = loadImage('.idea/background.png');
    upperPipeImg = loadImage('.idea/Upper Pipe.png');
    lowerPipeImg = loadImage('.idea/Lower Pipe.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bird = new Bird()

}

function draw() {

    imageMode(CORNER);
    image(backgroundImg,0 , 0, windowWidth, windowHeight);
    bird.show();
    bird.update();

    if (frameCount % 300 === 0) {
        pipes.push(new pipe());
    }
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
        pipes[i].show();

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


