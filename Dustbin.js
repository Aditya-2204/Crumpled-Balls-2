class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=200;
		this.Height=100;
		this.wallThickness=20;
		this.angle=0;
		this.image = loadImage('sprites/dustbingreen.png');
		
		this.imageBody=Bodies.rectangle(this.x, this.y, this.wallThickness, {isStaticc:true});
		Matter.Body.setAngle(this.imageBody, this.angle);
		World.add(world, this.imageBody);

	}
	display()
	{
			var imagePos=this.imageBody.position

			push()
			translate(imagePos.x, imagePos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.Width, this.wallThickness);
			imageMode(CENTER);
			image(this.image, 0, 0, this.Width, this.Height);
			pop()
			
	}

}