
var mrect, frect

function setup() {
  createCanvas(800,400);
 mrect = createSprite(400, 200, 50, 50);
 frect = createSprite(200,200,70,20);
mrect.shapeColor = "red"
frect.shapeColor = "blue"
}

function draw() {
  background(0);  
  drawSprites();

  mrect.x = mouseX
  mrect.y = mouseY

  if(mrect.x - frect.x < mrect.width/2 + frect.width/2 && 
    frect.x - mrect.x < frect.width/2 + mrect.width/2 &&
    mrect.y - frect.y < mrect.height/2 + frect.height/2 &&
    frect.y - mrect.y < frect.height/2 + mrect.height/2) {
      mrect.shapeColor = "purple"
      frect.shapeColor = "purple"

    }
  
    else{
     mrect.shapeColor = "red"
     frect.shapeColor = "blue"
    }
}