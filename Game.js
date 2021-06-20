class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
    //   car1 = createSprite(100,200);
    //   car1.addImage("car1",car1_img);
    //   car2 = createSprite(300,200);
    //   car2.addImage("car2",car2_img);
    //   car3 = createSprite(500,200);
    //   car3.addImage("car3",car3_img);
    //   car4 = createSprite(700,200);
    //   car4.addImage("car4",car4_img);
    //   cars = [car1, car2, car3, car4];
    
    hero = createSprite(900,350,50,50)
    hero.addImage(playerImage)
    hero.scale = 0.3;
  hero.debug=true;
  
    hero1 = createSprite(500,350,50,50)
    hero1.addImage(playerImage)
    hero1.scale = 0.3;
    hero = [hero,hero1]
    

    }
  
    play(){
      form.hide();
      
       Player.getPlayerInfo();
    //   player.getCarsAtEnd()
      if(allPlayers !== undefined){
    //     background(rgb(198,135,103));
    //     image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        var display_position = 100;
        
    //     //index of the array
         var index = 0;
  
    //     //x and y position of the cars
        
  
        for(var plr in allPlayers){
    //       //add 1 to the index for every loop
         index = index + 1 ;
  
    //       //position the cars a little away from each other in x direction
       var x = 500;
       var y = 600;
     
         
          if (index === player.index){
            heros[index-1].x=x
            heros[index-1].y=y
            x=x+display_position
    //         stroke(10);
    //         fill("red");
    //         ellipse(x,y,60,60);
    //         cars[index - 1].shapeColor = "red";
    //         camera.position.x = displayWidth/2;
    //         camera.position.y = cars[index-1].y;
    //       }
         
    //       //textSize(15);
    //       //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
    //     }
  
    //   }
  
    //   if(keyIsDown(UP_ARROW) && player.index !== null){
    //     player.distance +=10
    //     player.update();
    //   }
  
    //   if(player.distance > 3860){
    //     gameState = 2;
    //     player.rank+=1
    //     Player.updateCarsAtEnd(player.rank)
     }
     
    //   drawSprites();
    background(0);

    edges = createEdgeSprites()
    zombie1.bounceOff(edges)
    zombie2.bounceOff(edges)
    zombie3.bounceOff(edges)
    zombie4.bounceOff(edges)
    zombie5.bounceOff(edges)
    zombie6.bounceOff(edges)
    zombie7.bounceOff(edges)
    zombie8.bounceOff(edges)
    zombie9.bounceOff(edges)
    zombie10.bounceOff(edges)
    zombie11.bounceOff(edges)
     
     if(keyDown("space")){
   this.createBullet();
   bullet.x=heros[index-1].x
   bullet.y=heros[index-1].y
       }
   
    if(keyDown("LEFT_ARROW")){
    heros[index-1].velocityX = -4;
    
    }
    if(keyDown("RIGHT_ARROW")){
        heros[index-1].velocityX = 4;
    }
    if(keyDown("UP_ARROW")){
        heros[index-1].velocityY = -4;
    }
    if(keyDown("DOWN_ARROW")){
        heros[index-1].velocityY = 4;   
    }
   
    if(bulletgroup.isTouching(zombie1) 
    || bulletgroup.isTouching(zombie2) 
    || bulletgroup.isTouching(zombie3)
    || bulletgroup.isTouching(zombie4)
    || bulletgroup.isTouching(zombie5)
    || bulletgroup.isTouching(zombie6)
    || bulletgroup.isTouching(zombie7)
    || bulletgroup.isTouching(zombie8)
    || bulletgroup.isTouching(zombie9)
    || bulletgroup.isTouching(zombie10)
    || bulletgroup.isTouching(zombie11)
    ){
      console.log("Hey I am alive")
   
      if(bulletgroup.isTouching(zombie1)){
        zombie1.destroy();
        bulletgroup.destroyEach();
        score = score+1;
        console.log("Z1")
      }
   
      if(bulletgroup.isTouching(zombie2)){
       zombie2.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z2")
     }
   
     if(bulletgroup.isTouching(zombie3)){
       zombie3.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z3")
     }
   
     if(bulletgroup.isTouching(zombie4)){
       zombie4.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z4")
     }
   
     if(bulletgroup.isTouching(zombie5)){
       zombie5.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z5")
     }
   
     if(bulletgroup.isTouching(zombie6)){
       zombie6.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z6")
     }
   
     if(bulletgroup.isTouching(zombie7)){
       zombie7.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z7")
     }
   
     if(bulletgroup.isTouching(zombie8)){
       zombie8.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z8")
     }
      
     if(bulletgroup.isTouching(zombie9)){
       zombie9.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z9")
     }
   
     if(bulletgroup.isTouching(zombie10)){
       zombie10.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z10") 
     }
   
     if(bulletgroup.isTouching(zombie11)){
       zombie11.destroy();
       bulletgroup.destroyEach();
       score = score+1;
       console.log("Z11")
     }
    }
   
    //zombie1.pointTo(hero);
    //createEdgeSprites();
    
   // heros.collide(edges)
   
    if(keyDown("UP_ARROW")){
        heros[index-1].velocityX = 2;
        heros[index-1].velocityY = 3;
      }
    }
    if(keyDown("DOWN_ARROW")){
        heros[index-1].velocityX = -2;
        heros[index-1].velocityY = -3;
    }
    if(keyDown("RIGHT_ARROW")){
    heros[index-1].velocityX =  2;
    heros[index-1].velocityY = -3;
    }
    if(keyDown("LEFT_ARROW")){
        heros[index-1].velocityX = -2;
        heros[index-1].velocityY = 3;
    }
   
     drawSprites();
   }
}
    

    end(){
      console.log("Game Ended");
      console.log(player.rank)
    }
  
  createBullet(){
    bullet = createSprite(hero.x,hero.y+30,20,20)
    bullet.addImage(bulletImage)
    bullet.scale = 0.07;
    bullet.velocityX = 4;
    
    bulletgroup.add(bullet); 
    console.log("Hey I am bullet")
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
