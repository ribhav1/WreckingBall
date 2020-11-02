class ball {
    constructor(x, y, r, bool){
        var options = {
            isStatic: bool,
            density: 1,
            friction: 0,
            restitution: 0.1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(255, 50, 0);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}