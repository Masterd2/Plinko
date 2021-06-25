class Particle{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.r = radius;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
      }
}