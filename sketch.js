var gogh, ophelia, dali, jane;
var currentMarkerId = null;
var imgs = [];
var gfxs = [];

function preload() {
  gogh = loadImage('vangogh.jpg');
  ophelia = loadImage('ophelia.jpg');
  dali = loadImage('dali.jpg');
  jane = loadImage('jane2.jpg');
  dead = loadImage('isleofdead.jpg');
  sea = loadImage('wandarer.jpg');

  // Görseller arrayde
  imgs = [gogh, ophelia, dali, jane, dead, sea];
}

function setup() {
  createARCanvas(400, 400, P2D, { 
    scale: 10,
    onMarkerFound: (id) => currentMarkerId = id,
    onMarkerLost: (id) => {
      if (currentMarkerId === id) currentMarkerId = null;
    }
  });

  // 20-24 arasındaki marker'lar
  for (let i = 20; i < 26; i++) {
    const gfx = createARGraphics(400, 400, P2D, { scale: 1, markerId: i });
    gfx.noStroke();
    gfxs.push(gfx);
  }
}

function draw() {
  background(0, 0, 0, 0);

  gfxs.forEach((gfx, index) => {
    gfx.clear();
    gfx.image(imgs[index], 0, 0, width, height);
  });
}

