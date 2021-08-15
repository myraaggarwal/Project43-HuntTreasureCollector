var bg,bg2,form,system,code,security;
var score=0;

const inputName1="VARIABLE";
const inputName2 = "DATABASE";
const inputName3 = "FUNCTION";

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  background(bg);
  console.log(mouseX,mouseY);
  createCanvas(1000,500);

  system = new System();
  security = new Security();
  
}
function clues(){
  fill("lightblue");
  textSize(15);
  text("Hint: Always changing , not constant",100,100);
  text("Hint: stores all the infomation",100,310);
  text("Hint: performs a particular task",750,150);
}

function words(){
  fill("white");
  textSize(17);
  text("R E V B A I L A ",100,80);
  text("A T E D A S B A",100,290);
  text("C U T N I F O N ",750,130);
}

function draw() {
  background(bg);

  clues();
  words();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}
