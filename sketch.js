function setup() {
  createCanvas(800,400);
 FIXEDRECT= createSprite(200, 200, 80, 50);
 FIXEDRECT.shapeColor="red";
 FIXEDRECT.debug=true;
 MOVINGRECT= createSprite(200, 400, 80, 50);
 MOVINGRECT.shapeColor="red";
 MOVINGRECT.debug=true;
 MOVINGRECT.velocityY=-3;

 CAT=createSprite(100,200,50,50);
 DOG=createSprite(200,300,50,50);
 
/* FIXEDRECT.velocityX=3;
 MOVINGRECT.velocityX=-3;
*/
}

function draw() {
  background(255,255,255);  
    DOG.x=mouseX;
 DOG.y=mouseY;
  
console.log(FIXEDRECT.x);
console.log(MOVINGRECT.x);
console.log(MOVINGRECT.x-FIXEDRECT.x);




  if(isTouching(CAT,DOG)){
   /* MOVINGRECT.shapeColor="green";
    FIXEDRECT.shapeColor="green";
    */
   CAT.x=50;
   CAT.y=50;
  }
  else{
    MOVINGRECT.shapeColor="red";
    FIXEDRECT.shapeColor="red";
  }
 bounceOff1(MOVINGRECT,FIXEDRECT);
  drawSprites();
}





