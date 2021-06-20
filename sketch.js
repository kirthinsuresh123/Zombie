var zombie1,zombie2,zombie3,zombie4,zombie5,zombie6,zombie7,zombie8,zombie9,zombie10,zombie11,hero,hero1,bullet
 
var backgroundImage,zombieImage,playerImage,bulletImage

var form,game,player, bulletgroup
var gameState = 0,playerCount,allPlayers
var heros
var form,player,game
var score=0
var database
var edges

function preload(){
  playerImage = loadImage("images/Player.png");
  zombieImage = loadImage("images/Enemy01.png")
  backgroundImage = loadImage("images/background1.png")
  bulletImage = loadImage("/images/Bullets.png")
}

function setup() {
  
  createCanvas(2400,1800);
  database = firebase.database()
  //background = createSprite(0,0,4500,10);
  //background.addImage(backgroundImage)
  //background.scale = 3.70;

 game = new Game();
 game.getState();
 game.start();
   

  zombie1 = createSprite(50,100,50,50)
  zombie1.addImage(zombieImage)
  zombie1.scale = 0.3;
  zombie1.debug=true;
  zombie1.velocityX = -2;
  zombie1.velocityY = 2;

  zombie2 = createSprite(50,700,50,50)
  zombie2.addImage(zombieImage)
  zombie2.scale = 0.3;
  zombie2.velocityX = 5;
  zombie2.velocityY = -2;

  zombie3 = createSprite(550,100,50,50)
  zombie3.addImage(zombieImage)
  zombie3.scale = 0.3;
  zombie3.velocityX = -7;
  zombie3.velocityY = -2;

  zombie4 = createSprite(1550,700,50,50)
  zombie4.addImage(zombieImage)
  zombie4.scale = 0.3;
  zombie4.velocityX = 2;
  zombie4.velocityY = -7;

  zombie5 = createSprite(1100,100,50,50)
  zombie5.addImage(zombieImage)
  zombie5.scale = 0.3;
  zombie5.velocityX = 4;
  zombie5.velocityY = -4;

  zombie6 = createSprite(560,700,50,50)
  zombie6.addImage(zombieImage)
  zombie6.scale = 0.3;
  zombie6.velocityX = 3.5;
  zombie6.velocityY = 2;

  zombie7 = createSprite(1100,700,50,50)
  zombie7.addImage(zombieImage)
  zombie7.scale = 0.3;
  zombie7.velocityX = -2.2;
  zombie7.velocityY = 2;


  zombie8 = createSprite(1550,100,50,50)
  zombie8.addImage(zombieImage)
  zombie8.scale = 0.3;
  zombie8.velocityX = -2;
  zombie8.velocityY = 3.2;

  zombie9 = createSprite(1550,800,50,50)
  zombie9.addImage(zombieImage)
  zombie9.scale = 0.3;
  zombie9.velocityX = 3.9;
  zombie9.velocityY = 3;

  zombie10 = createSprite(1550,600,50,50)
  zombie10.addImage(zombieImage)
  zombie10.scale = 0.3;
  zombie10.velocityX = 2;
  zombie10.velocityY = 1;

  zombie11 = createSprite(1550,400,50,50)
  zombie11.addImage(zombieImage)
  zombie11.scale = 0.3;
  zombie11.velocityX = -1.5;
  zombie11.velocityY = 2.1;



  bulletgroup=new Group();

  }

function draw() {
  if(playerCount === 2){
    gameState = 1
  
  }
  if(gameState === 1){
game.play()
  
  }
if(score === 11){
  game.end()
}
}


























  