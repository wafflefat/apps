var f, g, h;

function setup() { 
  createCanvas(1000,1000);

           f= random(155)
	g= random (155)
	h= random(155)
} 

function mouseWheel() { 
  background(f,g,h);
}

function mouseDragged() {
	strokeWeight (15)
	stroke(f,g,h)
	fill(f,g,h,200)
	ellipse(mouseX,mouseY,10,10)
}

function mousePressed () {
f=random(155)
	g=random(155)
	h=random(155)}
	
