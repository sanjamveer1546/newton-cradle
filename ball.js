class Ball {

constructor(x,y){
var options={
    isStatic:false,
    length:20,
    restitution:1,
    friction:0,
    density:0.3
}

this.radius=25;
this.body=Bodies.circle(x,y,25,options);
World.add(world,this.body);
}
display(){
    var pos= this.body.position;
    push();
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,25,25);
    pop();

}
}