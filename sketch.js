var smallPoint = 20;
var largePoint = 50;

var hueColor = 0;
var spread = 2.7;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('container');

  spreadSlider = createSlider(0.2, 10, 2.7);
  spreadSlider.position(20, 20);
  //imageMode(CENTER);
  colorMode(HSB, 100, 100, 100, 1);
  fill(100, 100, 100, 0.005)
  noStroke();
}

function draw() {

  if (mouseIsPressed) {
    for (var i = 0; i < 20; i++) {
      var vec = p5.Vector.random2D();
      vec.mult(random(1, 20 * spreadSlider.value()));
      var pointsize = random(smallPoint, largePoint);
      var x = mouseX + vec.x;
      var y = mouseY + vec.y;

      ellipse(x, y, pointsize, pointsize);
      hueColor = map(second(), 0, 60, 0, 100);
      fill(hueColor, 100, 100, 0.01);
    }
  }
  
}

function keyPressed() {
  if (key === " ") {
    clear();
  }
}