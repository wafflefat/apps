
var f, g, h;

function setup() { 
  createCanvas(windowWidth, windowHeight);
background(125);
           f= random(155);
	g= random (155);
	h= random(155);
} 

function mouseWheel() { 
  
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