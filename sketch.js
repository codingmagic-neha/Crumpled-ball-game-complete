
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var dustbinObj, paperObject, groundObject;

function preload(){

	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(700,670,1600,20);
	dustbinObj= new dustbin(1200,650);
	paperObject=new paper(200,450,70);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  


  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:300,y:-600});

    
  	}
}





