const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var backgroundimg,getBackgroundImg;
var engine,world;
function preload(){
  getBackgroundImg();
}
function setup() {
  var canvas = createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(550,660,1200,10)
  division1=new divide(495,566,10,200);
  division2=new divide(230,566,10,200);
  division3=new divide(130,566,10,200);
  division4=new divide(400,566,10,200);
  division5=new divide(332,566,10,200);
  division6=new divide(40,566,10,200);
  plinko1=new plinkos(100,236);
  plinko2=new plinkos(200,236);
  plinko3=new plinkos(300,236);
  plinko4=new plinkos(400,236);
  plinko5=new plinkos(20,296);
  plinko6=new plinkos(150,296);
  plinko7=new plinkos(250,296);
  plinko8=new plinkos(350,296);
  plinko9=new plinkos(450,296);
  plinko10=new plinkos(550,296);
  plinko11=new plinkos(80,350);
  plinko12=new plinkos(200,350);
  plinko13=new plinkos(320,350);
  plinko14=new plinkos(400,350);
}
var particles=[];
var plinko=[];
var divisions=[];


function draw() {
  if(backgroundimg)
  background(backgroundimg)
  Engine.update(engine); 
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko10.display();
  plinko9.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display()
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=0600 && hour<=1900){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg2.jpg";
  }
  backgroundimg = loadImage(bg);
  console.log(backgroundimg);
}
