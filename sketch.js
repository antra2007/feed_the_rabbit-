var garden,rabbit;
var gardenImg,rabbitImg;
var apple,ai;
var leaf,li;
var oleaf,oli;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ai = loadImage("apple.png");
  li = loadImage("leaf.png");
  oli = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
  garden.scale = 0.50
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x = mouseX;
  
  if (garden.x < 0){
    garden.x = garden.width/2;
  }
  spwanapple();
  spwanleaf();
  spwanorangeleaf();
  
  drawSprites();
}

function spwanapple(){
  if(frameCount%100 === 0){
    apple = createSprite(50,40,40,30);
  apple.scale = 0.05;
  apple.addImage(ai);
  apple.velocityY = 4;
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
}
}

function spwanleaf(){
  if(frameCount%200 === 0){
  leaf = createSprite(200,40,40,30);
  leaf.scale = 0.05;
  leaf.addImage(li);
  leaf.velocityY = 5;
    leaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
}
}

function spwanorangeleaf(){
  if(frameCount%350 === 0){
  oleaf = createSprite(250,40,40,30);
  oleaf.scale = 0.05;
  oleaf.addImage(oli)
  oleaf.velocityY = 6;
    oleaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
}
}
