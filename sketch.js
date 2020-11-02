const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const mConstraint = Matter.MouseConstraint;

var ground;
var boxes = [];
var ball1;
var rope1;

function setup() {
  createCanvas(1100,600);

  engine = Engine.create();
  world = engine.world;
 
  ground = new block(550, 580, 1100, 40, true);
  ball1 = new ball(350, 300, 30, false);
  rope1 = new rope(ball1.body, {x: 350, y: 300});
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 555, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 505, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 455, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 405, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 355, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 305, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 255, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 205, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 155, 50, 50);
    boxes.push(box18);
  }
  for(var i = 450; i <= 1075; i += 50){
    var box18 = new block(i, 105, 50, 50);
    boxes.push(box18);
  }
  Engine.run(engine);
}

function draw() {
  background(170);  

  ground.display();
  ball1.display();
  rope1.display();
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
}
function mouseDragged(){
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}
