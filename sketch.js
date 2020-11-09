const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var line1,line2,line3,line4,line5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
    roof = new Roof(400,200,500,50);
    bobObj3 = new Bob(400,200,70);
    bobObj2 = new Bob(330,200,70);
    bobObj1 = new Bob(260,200,70);
    bobObj4 = new Bob(470,200,70);
    bobObj5 = new Bob(540,200,70);
    line1 = new Rope(bobObj1.body,{x:260,y:200})
    line2 = new Rope(bobObj2.body,{x:330,y:200})
    line3 = new Rope(bobObj3.body,{x:400,y:200})
    line4 = new Rope(bobObj4.body,{x:470,y:200})
    line5 = new Rope(bobObj5.body,{x:540,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  roof.display();
  bobObj3.display();
  bobObj2.display();
  bobObj1.display();
  bobObj4.display();
  bobObj5.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  drawSprites();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-85,y:0})
  }
}



