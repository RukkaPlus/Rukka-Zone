var { init, Sprite, SpriteSheet, GameLoop, initKeys, keyPressed, initPointer, track } = kontra;
function altElement0() {
  let { canvas } = init("element-0");
  let rectangle = Sprite({
    x: 10, y: 10,
    color: 'blue',
    width: 20,
    height: 40,
    dx: 2
  });
  let loop = GameLoop({
    update: function() {
      rectangle.update();
      if (rectangle.x > canvas.width) {
        rectangle.x = -rectangle.width;
      }
    },
    render: function() {
      rectangle.render();
    }
  });
  loop.start();
}
function altElement1() {
  init('element-1');
  let sprite = Sprite({x: 10, y: 10, width: 20, height: 40, color: 'red' });
  let loop = GameLoop({
    update: function() { sprite.x += 3; },
    render: function() { sprite.render(); }
  });
  loop.start();
}
function altElement2() {
  init("element-2");
  let rectangle = Sprite({
    x: 10, y: 10, anchor: { x: 0.5, y: 0.5 },
    width: 20,
    height: 40,
    color: 'red'
  });
  rectangle.render();
}
function altElement3() {
  init("element-3");
  let image = new Image();
  image.src = '../../assets/images/example_kontra-0.png';
  image.onload = () => {
    let sprite = Sprite({
      x: 40, y: 60, anchor: { x: 0.5, y: 0.5 },
      image: image
    });
    sprite.render();
  }
}
function altElement4() {
  init('element-4');
  let image = new Image();
  image.src = "../../assets/images/example_kontra-1.png";
  image.onload = () => {
    let spriteSheet = SpriteSheet({
      image: image,
      frameWidth: 72,
      frameHeight: 97,
      animations: {
        walk: {
          frames: '0..9',
          frameRate: 30
        }
      }
    });
    let sprite = Sprite({
      x: 40, y: 60, anchor: {x: 0.5, y: 0.5},
      animations: spriteSheet.animations
    });
    let loop = GameLoop({ update: function(dt) { sprite.update(); },
      render: function() { sprite.render(); } });
    loop.start();
  };
}
function altElement5() {
  init('element-5');
  let sprite = Sprite({
    x: 40, y: 40,
    color: 'red',
    radius: 20,
    render: function() {
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.arc(0, 0, this.radius, 0, 2  * Math.PI);
      this.context.fill();
    }
  });
  sprite.render();
}
function altElement6() {
  init('element-6');
  initKeys();
  let rectangle = Sprite({
    x: 10, y: 10, anchor: { x: 0.5, y: 0.5 },
    width: 20, height: 40, color: 'red',
    update: function() {
      if (keyPressed("right")) this.x += 3;
      else if (keyPressed("left")) this.x -= 3;
      if (keyPressed("up")) this.y -= 3;
      else if (keyPressed("down")) this.y += 3;
    }
  });
  let loop = GameLoop({
    update: function() { rectangle.update(); },
    render: function() { rectangle.render(); }
  });
  loop.start();
}
function altElement7() {
  init('element-7');
  initPointer();
  let sprite = Sprite({
    x: 10, y: 10, anchor: { x: 0.5, y: 0.5 },
    width: 20, height: 40, color: 'red',
    onDown: function() { this.color = 'blue'; }
  });
  let loop = GameLoop({
    update: function() { sprite.update(); },
    render: function() { sprite.render(); }
  });
  track(sprite);
  loop.start();
}
function altElement8() {
  init('element-8');
}