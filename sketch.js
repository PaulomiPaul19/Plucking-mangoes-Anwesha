
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyIMG;

function preload()
{
	boyIMG = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(500,500,50,50);

	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();
	mango6 = new Mango();
	mango7 = new Mango();

	tree = new Tree(650, 650, 30);

	ground = new Ground();

	constraint = new Constraints(boy.pos,stone.pos);

	boy = createSprite(200,200,10,20);
	boy.addImage(boyIMG);
	boy.scale = 0.15;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  tree.display();

  ground.display();

  detectCollison(stone, mango1);
  detectCollison(stone, mango2);
  detectCollison(stone, mango3);
  detectCollison(stone, mango4);
  detectCollison(stone, mango5);

  drawSprites();
 
}

function mouseReleased(){
    boy.fly();
}

function keyPressed(){
    if(keyCode === 32){
        stone.trajectory = [];
        Matter.Body.setPosition(bird.body,200,{x:200, y:50});
       boy.attach(stone.body);
    }
}

function detectCollison(lstone, lmango) {
	mango = lmango.body.position
	stone = lstone.body.position

	var distance = dist(stone.position.x, stone.position.y, mango.position.x,mango.position.y);
	if(distance<=lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}