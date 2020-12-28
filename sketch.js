var ground;
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;


function preload()
{
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  //create a ground sprite
  ground=createSprite(400,360,900,5);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  //console.log(ground.x);

  //create a monkey sprite
  monkey=createSprite(80,330,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //create a obstacle sprite
  //banana=createSprite(220,100,20,20);
  //banana.addImage(bananaImage);
  //banana.scale=0.1;
  
  bananaGroup = new Group(); 
  obstacleGroup = new Group(); 
  
  
  
  
}


function draw() {
  background(255);
  
  if(keyDown("space")&& monkey.y >= 50) 
  {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  //to make a infinite ground
  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }
  
banana();
drawSprites(); 
}
 function banana()
  {
    if(frameCount%80===0)
    {
      ban=createSprite(400,100,20,20);
      ban.scale=0.1;
      
      ban.velocityX= -7;
      
     // ran=Math.round(random(1,4));
      //if (ran == 1)
      //{
        ban.addImage(bananaImage);
      //}
      ban.y=Math.round(random(120,200));
      
      ban.setLifetime=100;
      
      bananaGroup.add(ban);
    }
  
}


