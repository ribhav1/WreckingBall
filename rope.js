class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 200
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        if(this.rope.bodyA){
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        push();
        stroke("black");
        strokeWeight(3);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
        }
    }
}