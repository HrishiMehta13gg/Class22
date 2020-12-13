const Engine = Matter.Engine;
    
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball
var engine
var ground;

function setup() {
  createCanvas(800,400);
  
   engine = Engine.create();
  world=engine.world ;
  var options={
    isStatic:true
  }
  ground= Bodies.rectangle(400, 380, 800, 20,options);
  World.add(world,  ground);
console.log(ground);

var ball_options={
  isStatic:false,
  restitution:1.0
}
ball= Bodies.circle(400, 200, 20,ball_options);
World.add(world,  ball);
console.log(ball);

}

function draw() {
  background(200,300,25);
  Engine.update(engine);
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,800,20)

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
    drawSprites();
}