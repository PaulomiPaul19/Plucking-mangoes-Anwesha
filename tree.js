class Tree extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
    display() {
      super.display();
    }
  }