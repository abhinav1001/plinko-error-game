class plinkos {
    constructor(x, y) {
      var options = {
        'isStatic':true,
      }
      this.body = Bodies.circle(x, y,50, options);
      this.image=loadImage("smoke.png");
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop()
    }
  };