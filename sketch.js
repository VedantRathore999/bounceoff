var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

if(bounceOff(movingRect,fixedRect)){
movingRect.velocityY=5
fixedRect.velocityY=-5
}
  
  drawSprites();
}

function bounceOff(object1,object2){
  
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2
    
    ){
    return true
    }
else{
  false
}




}







