const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ball;
var rope;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    box1 = new Building(900, 100, 70, 70);
    box2 = new Building(900, 200, 70, 70);
    box3 = new Building(900, 300, 70, 70);
    box4 = new Building(900, 400, 70, 70);
    box5 = new Building(800, 100, 70, 70);
    box6 = new Building(800, 200, 70, 70);
    box7 = new Building(800, 300, 70, 70);
    box8 = new Building(700, 100, 70, 70);
    box9 = new Building(700, 200, 70, 70);
    box10 = new Building(700, 300, 70, 70);
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){
    background("white");
       ground.display();
       box1.display();
       box2.display();
       box3.display();
       box4.display();
       box5.display();
       box6.display();
       box7.display();
       box8.display();
       box9.display();
       box10.display();
       ball.display();
       rope.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
