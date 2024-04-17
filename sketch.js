var box;

function setup() {
  createCanvas (400,400)
  box = createSprite(200,200,800,30)
  

}

function draw() 
{
   background(30);
   //keyIsDown verifica se a tecla esta sendo pressionada e retorna//
   if keyIsDown(RIGHT_ARROW)
   {
    box.position.x +- 5;
    background("red");
   }


  

  drawSprites();
}




