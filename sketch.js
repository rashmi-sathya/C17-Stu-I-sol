
var father;
var mother;

function setup() {
  createCanvas(600, 400);
  father=new person("john",29);
  mother=new person("jas",29); 
}

function draw() {
  background(220);
  father.show();
mother.show();
  
}

