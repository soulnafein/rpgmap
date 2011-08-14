function rpgMapCreate(canvasId) {
  var canvas = new fabric.Canvas(canvasId, { selection: false });

  fabric.Image.fromURL('path.png', function(img) {
    img.set('left', 1024).set('top', 1024);
    canvas.add(img);
  });
}


