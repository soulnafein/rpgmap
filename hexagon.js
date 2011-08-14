var Hexagon = function() {
  var self = {};
  self.thirtyDegrees = 0.523598776;

  return {
    init: function(x, y, sideLength) {
      self.h = Math.sin(self.thirtyDegrees) * sideLength;
      self.r = Math.cos(self.thirtyDegrees) * sideLength;
      self.height = 2 * self.r;
      self.width = sideLength + (2*self.h);
      self.x = x;
      self.y = y;
      self.sideLength = sideLength;
      return this;
    },

    vertices: function() {
      var vertices = [];
      vertices[0] = {x: self.x, 
                     y: self.y};
      vertices[1] = {x: self.x + self.sideLength, 
                     y: self.y};
      vertices[2] = {x: self.x + self.sideLength + self.h, 
                     y: self.y + self.r};
      vertices[3] = {x: self.x + self.sideLength, 
                     y: self.y + self.height};
      vertices[4] = {x: self.x, 
                     y: self.y + self.height};
      vertices[5] = {x: self.x - self.h, 
                     y: self.y + self.r};
      return vertices;
    }
  }
}();
