
var iss,issImg
var spaceCraft,spaceCraftimg1,spaceCraftimg2,spaceCraftimg3,spaceCraftimg4
var hasDocked = false

function preload(){

issImg=loadImage("iss.png");
spaceCraftimg3 = loadImage("spacecraft3.png");
spaceCraftimg4 = loadImage("spacecraft4.png"); 
spaceCraftimg2 = loadImage("spacecraft2.png");
spaceCraftimg1 = loadImage("spacecraft1.png");
bg = loadImage("spacebg.jpg")


}
function setup() {
  createCanvas(1000,600);



  spaceCraft = createSprite(380,425,75,75)
 spaceCraft.addImage(spaceCraftimg1);
 spaceCraft.scale = 0.26


 iss = createSprite(450, 250, 50, 50);
 iss.addImage(issImg);

 

  spaceCraft.x = random(370,390);
}

function draw() {
  background(bg);  

  //iss.debug = true;
  iss.setCollider("rectangle",-69,32,10,10)

  if(!hasDocked){
    

    if(keyCode === 87){
      spaceCraft.addImage(spaceCraftimg2);
      spaceCraft.y = spaceCraft.y - 1
    }
    if(keyCode === 65){
      spaceCraft.addImage(spaceCraftimg3);
      spaceCraft.x = spaceCraft.x + 1
    }
    if(keyCode === 68){
      spaceCraft.addImage(spaceCraftimg4);
      spaceCraft.x = spaceCraft.x - 1
    }
    /*if(keyCode === 83){
      spaceCraft.addImage(spaceCraftimg1);
    }*/

    
    

  }

  
  if(spaceCraft.isTouching(iss)){
    hasDocked = true;
  }

  if(hasDocked === true){
    textSize(60)
    fill("teal")
    text(" Docking Succesful  ",250,500);
  }
  



















  drawSprites();
}