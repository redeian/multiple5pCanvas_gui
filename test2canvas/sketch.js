
// first canvas
var myp5_1 = new p5( function( sketch ) {

  var x = 100; 
  var y = 100;
  var colors;

  sketch.setup = function() {
    sketch.createCanvas(200, 200);
    colors = new sketch.Color();
    var gui = new dat.GUI();
    gui.add(colors, 'r', 0, 255);
    gui.add(colors, 'g', 0, 255);
    gui.add(colors, 'b', 0, 255);
  };

  sketch.draw = function() {
    sketch.background(colors.r, colors.g, colors.b);
    sketch.fill(255);
    x = sketch.mouseX;
    y = sketch.mouseY;
    sketch.rect(x,y,50,50);
  };

  sketch.Color = function Color() {
    this.r = 255;
    this.g = 100;
    this.b = 255;
  };

}, 'p5Canvas1');
