var movingRect1,movingRect2;

function setup() {
    createCanvas(1200,800);
    movingRect1 = createSprite(400,100,50,80);
    movingRect2 = createSprite(400,800,80,30);
    movingRect1.shapeColor = "green";
    movingRect2.shapeColor = "green";
    movingRect1.debug = true;
    movingRect2.debug = true;
    movingRect1.velocityY = +2
    movingRect2.velocityY = -2
}

function draw() {
    background(0);
    bounceOff(movingRect2,movingRect1);
    drawSprites();
}
