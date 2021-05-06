const Engine = Matter.Engine;

const World = Matter.World; 

const Bodies = Matter.Bodies;

var myWorld, myEngine;
var ground;
var ball;
var box1,box2;

function setup() {
  createCanvas(400,400);

  //This creates the electronic engine of a car
  myEngine = Engine.create();

  //This is the world of the engine, it has to be dry and hot
  myWorld = myEngine.world;

  ground = new Ground(200,380,400,20);

  box1 = new Box(200,200,50,50);
  box2 = new Box(225,100,50,50);
  
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  ground.display();
  box1.display();
  box2.display();
  console.log(box2.body.angle)
}