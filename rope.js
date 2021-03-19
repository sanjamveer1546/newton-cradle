class Rope {
    constructor(bodyA ,pointB){
        var options= {
            bodyA : bodyA ,
            pointB :pointB ,
            length:200,
            stiffness :0.06
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope); 
     
    }
display(){
    var pointA =this.rope.bodyA.position;
    var pointB =this.rope.pointB;
   fill("red");
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}
}