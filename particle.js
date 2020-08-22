class particles{
    constructor(x,y,r){
      var options={
          resitution:0.4,
      }
      this.r=r;
      this.body=Bodies.circle(x,y,this.r,options);
      this.color=color(random(225,0,0),random(0,225,0),random(0,0,225));
      World.add(world, this.body);
    }
    display(){
        var position=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }

}