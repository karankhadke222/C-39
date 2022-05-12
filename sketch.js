var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var cycleBell;
var pinkCG;
var yellowCG;
var redCG;
var oppPink1Img;
var opponent1,opponent2,opponent3,opponent4,opponent5,opponent6,opponent7;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  pinkCG = loadImage("opponent1.png");
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  pinkCG=createGroup;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
    
  if(path.x < 0 ){
    path.x = width/2;
  }
   var select_oppPlayer = Math.round(random(1,3));
    if(World.frameCount% 150 == 0){
      if (select_oppPlayer == 1)
        pinkCyclists();
    }
  }
  }
   
 
  
 
function pinkCyclists(){
  player1 = createSprite(110,Math.round(random(50,250),10,10))
  player1.scale=0.6;
  player1.addAnimation("opponentPlayer1",oppPink1Img);
  player1.setLifetime=170;
  pinkCG.add(player1);
}

