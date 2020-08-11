
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	





	
	//Create the Bodies Here.
	
	Engine.run(engine);
	box1= new Box (1200,655,170,10);
	box2= new Box (1122,615,10,50);
	box3= new Box (1280,615,10,50);
	ground = new Ground(700,670,1400,10)
ball =new Ball(100,300,30)




}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display()
  box3.display()
  ground.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:210,y:-210});


}


}


