var rect,rect2,rect3,rect4;
var ball1,ball2,ball3,ball4,ball5;



function setup() {
  createCanvas(800,400);


  rect=createSprite(400, 200, 50, 50);
  rect.shapeColor="blue";
  
   
  rect2=createSprite(100,150,70,30);
  rect2.shapeColor="blue";
  

  rect3=createSprite(300,10,70,30);
  rect3.shapeColor="blue";
  rect3.velocityY=5;

  rect4=createSprite(300,400,70,30);
  rect4.shapeColor="blue";
  rect4.velocityY=-5;

  ball1 =createSprite(100,100, 50,50);
  ball1.shapeColor = "blue"  ;

 ball2=createSprite(180,100,50,50);  
 ball2.shapeColor="blue";

 ball3=createSprite(260,100,50,50);
ball3.shapeColor="blue";

ball4=createSprite(340,100,50,50);
ball4.shapeColor="blue";


}

function draw() {
  background("black");

rect2.x=mouseX;  
rect2.y=mouseY;

  // true
  // false
if(isTouching(rect2,ball2)){
  ball2.shapeColor="red";
  rect2.shapeColor="red";

}
else{
  rect2.shapeColor="blue";
  ball2.shapeColor="blue"; 

}

bounceoff(rect3,rect4)
 


  drawSprites();

}

function bounceoff(object1,object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2 && object2.x-object1.x < object1.width/2 + object2.width/2){
    object1.velocityX = -object1.velocityX;
    object2.velocityX = -object2.velocityX;
 }  
 
 if(object1.y- object2.y < object1.height/2+object2.height/2 && object2.y-object1.y < object1.height/2 + object2.height/2){
  object1.velocityY = -object1.velocityY;
  object2.velocityY = - object2.velocityY;
 }



}


