var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var arrowGroup, bGroup, rGroup, gGroup, pGroup
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  arrowGroup = createGroup();
  bGroup = createGroup();
  rGroup = createGroup();
  gGroup = createGroup();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  if(arrowGroup.isTouching(rGroup)){
    arrowGroup.destroyEach()
    rGroup.destroyEach()
  }
  if(arrowGroup.isTouching(bGroup)){
    arrowGroup.destroyEach()
    bGroup.destroyEach()
  }
  if(arrowGroup.isTouching(rGroup)){
    arrowGroup.destroyEach()
    rGroup.destroyEach()
  }
  if(arrowGroup.isTouching(rGroup)){
    arrowGroup.destroyEach()
    rGroup.destroyEach()
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if(select_balloon == 2){
      blueBalloon();
    }
    if(select_balloon == 3){
      greenBalloon();
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  rGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10)
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10)
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150
  green.scale = 0.1;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
}
