class Mango extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);

      var options = {
        isStatic: true,
        restitution: 0,
        friction: 1
      }

      this.image = loadImage("mango.png");
    }
  
    display() {
      var pos = this.body.position;
      Matter.Bodies.circle(pos.x,pos.y, 30);
      super.display();
    }
  }
  