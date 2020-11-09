class Bob {

    constructor(x,y,r){
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/3,options)
    World.add(world,this.body)
    
    }
    display(){
      var paperpos = this.body.position;
 
      push()
      translate(paperpos.x,paperpos.y);
      ellipseMode(CENTER)
      ellipse(0,0,this.r,this.r)
      strokeWeight(2);
      fill(39,21,210)
      pop()
 
    }
 
 
 
 }