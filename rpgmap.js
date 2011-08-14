var RpgMap = function() {
  var self = {};

  self.initContext = function(canvasId) {
    self.context = document.getElementById(canvasId).getContext('2d');
  };

  self.drawBackground = function() {
    var img = new Image();
    img.onload = function(){
      self.context.drawImage(img,0,0);
      self.drawBoard();
    };
    img.src = 'path.png';
  };

  self.drawBoard = function() {
    var x=-100;
    var y=0;
    for(var i=0; i<10; i++) {
      x += 75;
      if (i % 2 == 0) {
        y = 0;
      } else {
        y = 43;
      }
      self.drawHexagon(x,y);
    }
  };

  self.drawHexagon = function(x, y) {
    var hexagon = Hexagon.init(x, y, 50);
    var vertices = hexagon.vertices();
    self.context.beginPath();
    self.context.moveTo(x, y);
    for(var i = 0; i<vertices.length; ++i) {
      self.context.lineTo(vertices[i].x,vertices[i].y);
    }
    self.context.closePath();
    self.context.stroke();
  };

  return {
    init: function(canvasId) {
      self.initContext(canvasId);
      self.drawBackground();
    }
  }
}();

