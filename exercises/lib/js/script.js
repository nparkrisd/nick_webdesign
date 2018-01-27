// center point
var centerX = 0.0, centerY = 0.0;

var radius = 90, rotAngle = -45;
var accelX = 0.0, accelY = 0.0;
var deltaX = 0.0, deltaY = 0.0;
var springing = 0.01, damping = .8;

//corner nodes
var nodes = 20;

//zero fill arrays
var nodeStartX = [];
var nodeStartY = [];
var nodeX = [];
var nodeY = [];
var angle = [];
var frequency = [];

// soft-body dynamics
var organicConstant = 1;

function setup() {
  createCanvas(1500, 700);

  //center shape in window
  centerX = width/2;
  centerY = height/2;

  //initialize arrays to 0
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }

  // iniitalize frequencies for corner nodes
  for (var i=0; i<nodes; i++){
    frequency[i] = random(0, 12);
  }

  noStroke();
  frameRate(60);
}

function draw() {
  //fade background
  fill(0, 100);
  rect(0,0,width, height);
  drawShape();
  moveShape();
}

function drawShape() {
  //  calculate node  starting locations
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = centerX+cos(radians(rotAngle))*radius;
    nodeStartY[i] = centerY+sin(radians(rotAngle))*radius;
    rotAngle += 360.0/nodes;
  }

  // draw polygon
  curveTightness(organicConstant);
  fill(255);
  beginShape();
  for (var i=1; i<nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (var i=1; i<nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}

function moveShape() {
  //move center point
  deltaX = mouseX-centerX;
  deltaY = mouseY-centerY;

  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

  // move predator's center
  centerX += accelX;
  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1-((abs(accelX)+abs(accelY))*.1);

  //move nodes
  for (var i=0; i<nodes; i++){
    nodeX[i] = nodeStartX[i]+sin(radians(angle[i]))*(accelX*4);
    nodeY[i] = nodeStartY[i]+sin(radians(angle[i]))*(accelY*4);
    angle[i] += frequency[i];
  }
}
