
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,400);
	ball2 = new Ball(270,400);
	ball3 = new Ball(340,400);
	ball4 = new Ball(410,400);
	ball5 = new Ball(480,400);

	roof1 = new Roof(340,200,300,30);

	rope1 = new Rope(ball1.body,{x:240,y:200});
	rope2 = new Rope(ball2.body,{x:290,y:200});
	rope3 = new Rope(ball3.body,{x:340,y:200});
	rope4 = new Rope(ball4.body,{x:390,y:200});
	rope5 = new Rope(ball5.body,{x:440,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  roof1.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
 if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball1.body,ball1.position,{x:-30, y:-30});
 }
}

