let pipes = [];
let bird;
function setup() {
    createCanvas(windowWidth,windowHeight);
    bird = new Bird()

}

function draw() {
    background(0);
    bird.show();
    bird.update();

    if (frameCount % 350 === 0) {
        pipes.push(new pipe());
    }
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].offscreen()) {
            pipes.splice(i,1);
        }

    }



}

function keyPressed() {
    if (keyCode === 32) {
        bird.up();
    }
}


