class block {
    constructor(x, y, w, h, bool){
        var options = {
            isStatic: bool
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(0, 200, 100);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.w, this.h);
        pop();
    }
}