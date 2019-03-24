
// Second canvas
var myp5_2 = new p5( function( sketch ) {

    var x = 100; 
    var y = 100;
  
    var slider;
    var state;
  
    var colors;
  
    sketch.setup = function() {
      sketch.createCanvas(200, 200);
  
      button = sketch.createButton('click');
      button.mousePressed(this.greet);
  
      slider = sketch.createSlider(0, 255, 100);
      // slider.position(10,10);
      slider.style('width', '80px');
  
      colors = new sketch.Color();
      var gui = new dat.GUI();
      gui.add(colors, 'r', 0, 255);
      gui.add(colors, 'g', 0, 255);
      gui.add(colors, 'b', 0, 255);
      
    };
  
    sketch.greet = function() {
      console.log('love');
    };
  
    sketch.draw = function() {
  
      var width = slider.value();
      
      sketch.background(colors.r, colors.g, colors.b);
      sketch.fill(255);
      x = sketch.mouseX;
      y = sketch.mouseY;
      sketch.rect(x,y,width,50);
    };
  
    sketch.Color = function Color() {
      this.r = 255;
      this.g = 100;
      this.b = 255;
    };
  
  
  }, 'p5Canvas2');