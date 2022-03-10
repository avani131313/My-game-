var PLAY = 1
var END = 0
var gameState = PLAY 

var pinkCrystal, redcrystal, purpleCrystal, greenCrystal, whiteCrystal, blackCrystal, blueCrystal
var pinkCrystalImg, redCrystalImg, purpleCrystalImg, whiteCrystalImg, greenCrystalImg, blackCrystalImg, blueCrystalImg
var pinkGroup, redGroup, blackGroup, greenGroup, whiteGroup, blueGroup, purpleGroup
var mermaid, mermaid_swimming
var underwater, underwaterImg
var score 



function preload(){

mermaid_swimming = loadAnimation("mermaid1.png", "mermaid2.png", "mermaid3.png", "mermaid4.png", "mermaid5.png")
pinkCrystalImg = loadImage("pinkCrystal.png")
redcrystalImg = loadImage("redCrystal.png")
purpleCrystalImg = loadImage("purpleCrystal.png")
greenCrystalImg = loadImage("greenCrystal.png")
whiteCrystalImg = loadImage("whiteCrystal.png")
blackCrystalImg = loadImage("blackCrystal.png")
blueCrystalImg = loadImage("blueCrystal.png")
underwaterImg = loadImage("underwater wide.jpg")


}

function setup() {
 
 // creating bg 
    createCanvas(600,200)
 underwater= createSprite(300,50)
 underwater.addImage(underwaterImg)
 underwater.scale=2

 // creating mermaid 
 mermaid = createSprite(70,100)
 mermaid.addAnimation("swimming", mermaid_swimming)
 mermaid.scale=0.8

 score = 0 

 pinkGroup = new Group()
 blueGroup = new Group()
 purpleGroup = new Group()
 whiteGroup = new Group()
 greenGroup = new Group()
 redGroup = new Group()
 blackGroup = new Group()

}

function draw() {

    
 if(gameState === PLAY){
     //moving underwater
     underwater.velocity= -3
     
     if(underwater.x < 0){
         underwater.x = underwater.width/2
     }
    // creating crystals 

     var select_crystal = Math.round(random(1,7))

     if(World.frameCount % 100 == 0){
         switch(select_crystal){
          case 1: pinkCrystal();
          break;
          case 1: redCrystal();
          break;
          case 1: blueCrystal();
          break;
          case 1: whiteCrystal();
          break;
          case 1: greenCrystal();
          break;
          case 1: purpleCrystal();
          break;
          case 1: blackCrystal();
          break;
          
         }
     }
 }
 if(gameState == END){
    pinkGroup.destroy()
    blueGroup.destroy()
    purpleGroup.destroy()
    whiteGroup.destroy()
    greenGroup.destroy()
    redGroup.destroy()
    blackGroup.destroy()
    mermaid.destroy()
    underwater.velocityX = 0
 }

 // POINTS AND RULES
  if(mermaid.isTouching(pinkGroup)){
      pinkGroup.destroyEach()
      score=score+1
  }
  if(mermaid.isTouching(redGroup)){
    redGroup.destroyEach()
    score=score+2
}
 
if(mermaid.isTouching(greenGroup)){
    greenGroup.destroyEach()
    score=score+3
}

if(mermaid.isTouching(blueGroup)){
    blueGroup.destroyEach()
    score=score+4
}

if(mermaid.isTouching(purpleGroup)){
    purpleGroup.destroyEach()
    score=score+5
}

if(mermaid.isTouching(whiteGroup)){
    whiteGroup.destroyEach()
    score=score+10
}

if(mermaid.isTouching(blackGroup)){
    blackGroup.destroyEach()
    gameState = END;
}

 // moving mermaid with keys 
 if (keyDown("DOWN_ARROW")){
     mermaid.y = mermaid.y+2
 }
 if (keyDown("UP_ARROW")){
    mermaid.y = mermaid.y-2
}
 



drawSprites()
text("Score:" + score, 300,50)
}

function pinkCrystal() {
var pink = createSprite(0,Math.round(random(50,570)),10,10)
pink.addImage(pinkCrystalImg)
pink.velocityX=2
pink.lifetime = 150
pink.scale=0.1
pinkGroup.add(pink)

}

function redCrystal() {
var red = createSprite(0,Math.round(random(50,570)),10,10)
red.addImage(redCrystalImg)
red.velocityX=2
red.lifetime = 150
red.scale=0.1
redGroup.add(red)
    
    }

function greenCrystal() {
var green = createSprite(0,Math.round(random(50,570)),10,10)
green.addImage(greenCrystalImg)
green.velocityX=2
green.lifetime = 150
green.scale=0.1
greenGroup.add(green)
        
}

function whiteCrystal() {
var white = createSprite(0,Math.round(random(50,570)),10,10)
white.addImage(whiteCrystalImg)
white.velocityX=2
white.lifetime = 150
white.scale=0.1
whiteGroup.add(white)
            
            }
function purpleCrystal() {
var purple = createSprite(0,Math.round(random(50,570)),10,10)
purple.addImage(purpleCrystalImg)
purple.velocityX=2
purple.lifetime = 150
purple.scale=0.1
purpleGroup.add(purple)
                
}
                
function blackCrystal() {
var black = createSprite(0,Math.round(random(50,570)),10,10)
black.addImage(blackCrystalImg)
black.velocityX=2
black.lifetime = 150
black.scale=0.1
blackGroup.add(black)
                    
}

function blueCrystal() {
var blue = createSprite(0,Math.round(random(50,570)),10,10)
blue.addImage(pinkCrystalImg)
blue.velocityX=2
blue.lifetime = 150
blue.scale=0.1
blueGroup.add(blue)
                        
}  