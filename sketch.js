let splat;
let splat2;
let splat3;

let place1; 
let place2;
let place3;


function preload(){
  splat = loadImage('Winner.png');
  
  splat2 = loadImage('Shiver.png');
  
  splat3 = loadImage ('SP20.png');
  
}
function setup() {
  
  place1 = random(0,windowWidth);
  place2 = random(0,windowWidth);
  place3 = random(0, windowWidth);
  
  
 createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(0);
  textSize(40);
  fill(102, 32, 140);
  
  if(mouseX>200&&mouseX<600){
    background(255);
    text('SPLATFEST FALL 2023 - TEAM SHIVER', 20,80);
    image(splat,50,100,);
  }
  if(mouseY>200&&mouseY<400){
    image (splat2,place2,350);
  }
  imageMode(CORNER);
  image(splat3,300,250,mouseX,mouseY);
  
}

