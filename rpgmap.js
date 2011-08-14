var RpgMap = function() {
  self = {};

  self.initContext = function(canvasId) {
    self.context = document.getElementById(canvasId).getContext('2d');
  };

  self.drawBackground = function() {
    var img = new Image();
    img.onload = function(){
      self.context.drawImage(img,0,0);
    };
    img.src = 'path.png';
  };

  return {
    init: function(canvasId) {
      self.initContext(canvasId);
      self.drawBackground();
    }
  }
}();

