const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var mesa;
var bread1, bread2;
var kitchen;
var lechuga;
var carne1;
var queso;
var tomate;

function preload() {

   table=loadImage("cocina-moderna.jpg");
  
}

function setup() {
    createCanvas(800, 400);
    
    engine = Engine.create();
    world = engine.world;

    mesa = new Table(560, 330, 100, 100);
    bread1 = new Breadb(560, 300, 60, 25);
    lechuga = new Lettuce(560, 250, 75, 15)
    carne1 = new Meat(560, 150, 75, 15);
    queso = new Cheese(560, 140, 80, 20);
    tomate = new Tomato(560, 120, 75, 15);
    bread2 = new Breadup(560, 100, 50, 15);

}

function draw() {
    background(table);
    Engine.update(engine)

    mesa.display();
    bread1.display();
    lechuga.display();
    carne1.display();
    queso.display();
    tomate.display();
    bread2.display();

  

}