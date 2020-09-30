class Constraints{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }
    attach(body){
        this.constraint.bodyA = body;
    }
    
    fly(){
        this.constraint.bodyA = null;
    }

    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;
            push();
            pop();
        }
    }
    
}