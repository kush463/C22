const Engine = Matter.Engine; const World= Matter.World; const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var object, ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var object_option ={
  isStatic : true
  }

  object = Bodies.rectangle(200, 100, 50, 50,object_option);
  World.add(world,object);
  var ball_option ={
    restitution : 1.0
  }
   ball=Bodies.circle(200,100,20,ball_option);
   World.add(world,ball);
}

function draw() {
  background(220);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  }