const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 900;

// ctx.fillStyle = '#FF5F26';
// ctx.font = '15px Verdana';
// ctx.fillText('Gosia', 0, 30);

const fontMetrics = ctx.measureText('H');
const ascent = fontMetrics.actualBoundingBoxAscent;
const descent = fontMetrics.actualBoundingBoxDescent;
console.log(fontMetrics.actualBoundingBoxDescent, ascent, descent);

let x = 13

// ctx.save()
// ctx.fillStyle = 'white';
// ctx.font = '17px Verdana';
// ctx.fillText('H', x, 20);
// ctx.scale(2, 2);
// ctx.restore();

ctx.fillStyle = 'white';
ctx.font = '28px Verdana';
ctx.fillText('HELLO', x, window.innerHeight * 0.85 / 18);

ctx.fillStyle = 'white';
ctx.font = '28px Verdana';
ctx.fillText('WORLD', x, (window.innerHeight * 0.85 / 18) + 30);

// ctx.fillStyle = 'white';
// ctx.font = '18px Verdana';
// ctx.fillText('E', x, 37);

// ctx.fillStyle = 'white';
// ctx.font = '19px Verdana';
// ctx.fillText('L', x, 54);

// ctx.fillStyle = 'white';
// ctx.font = '19px Verdana';
// ctx.fillText('L', x, 71);

// ctx.fillStyle = 'white';
// ctx.font = '19px Verdana';
// ctx.fillText('O', x, 88);

const textCoordinates = ctx.getImageData(0, 0, 500, 1000);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

const mouse = {
  x: undefined,
  y: undefined,
  radius: 200
};

canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('touchmove', handleTouchMove);
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchend', handleTouchEnd);

function handleMouseMove(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

function handleTouchMove(event) {
  event.preventDefault();
  const touch = event.touches[0];
  if (touch) {
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
  }
}

function handleTouchStart(event) {
  event.preventDefault();
  const touch = event.touches[0];
  if (touch) {
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
  }
}

function handleTouchEnd(event) {
  event.preventDefault();
  mouse.x = undefined;
  mouse.y = undefined;
}

class Particle {
  constructor(x, y, finalX, finalY, color) {
    this.x = Math.round(x);
    this.y = Math.round(y);
    this.finalX = finalX;
    this.finalY = finalY;
    this.size = 3;
    this.baseX = this.finalX;
    this.baseY = this.finalY;
    this.density = Math.random() * 70;
    this.color = color;
    this.baseColor = this.color;
  }

  move() {
    if (this.x >= this.finalX) {
      this.x -= 12
    }
    if (this.x <= this.finalX) {
      this.x += 12
    }
    if (this.y <= this.finalY) {
      this.y += 6
    }
    if (this.y >= this.finalY) {
      this.y -= 6
    }
  }

  update() {
    if (window.hello) {
      let dx = mouse.x - this.finalX;
      let dy = mouse.y - this.finalY;
      let distance = Math.hypot(dx, dy);
      // to decide which direction the particles should move
      let forceDirectionX = dx / distance
      let forceDirectionY = dy / distance
      // we want particles within radius to move away from it. The closer to the mouse they are, the quicker they should move
      const force = (mouse.radius - distance) / mouse.radius;
      // final speed and direction for each particle
      let finalMovementX = forceDirectionX * force * this.density
      let finalMovementY = forceDirectionY * force * this.density

      if (distance < mouse.radius) {
        this.finalX -= finalMovementX;
        this.finalY -= finalMovementY;
      } else if (distance > mouse.radius && distance < mouse.radius + 50) {
        if (this.finalY > canvas.height  * 0.5) {
          this.color = 'rgba( 56,122,223,)';
        } else {
          this.color = 'rgba( 255,	181,	16, 1)';
        }

      } else {  // make particles move back to their original position if they're not already on it
        if (this.finalX !== this.baseX) {
          let dx = this.finalX - this.baseX;
          this.finalX -= dx/10;
        }
        if (this.finalY !== this.baseY) {
          let dy = this.finalY - this.baseY;
          this.finalY -= dy/10;
        }
        this.color = this.baseColor;
      }
    }
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill()
  }

}

function init() {
  particlesArray = [];
  for (let y = 0; y < textCoordinates.height; y++) {
    for (let x = 0; x < textCoordinates.width; x++) {
      let red = textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4)];
      let green = textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 1];
      let blue = textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 2];
      let alpha = textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3];
      let color = `rgba(${red}, ${green}, ${blue}, ${1})`;
      if (alpha > 50) {
        let positionX = x;
        let positionY = y;
        let posx = Math.random() * (0, canvas.width);
        let posy = Math.random() * (0, canvas.height);
        particlesArray.push(new Particle(posx, posy, positionX * 10, positionY * 10, color));
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach(particle => {
    particle.move();
    particle.update();
    particle.draw();
  });
  connect();
  requestAnimationFrame(animate);
}

function connect() {
  let opacity = 1;
  particlesArray.forEach((particle, i) => {
    for (let j = i; j < particlesArray.length; j++) {
      let dx = particle.x - particlesArray[j].x;
      let dy = particle.y - particlesArray[j].y;
      let distance = Math.hypot(dx, dy);

      if (distance < 40) {
        opacity = 1 - distance / 40;
        ctx.strokeStyle = particle.color.slice(0, -2) + opacity;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  });
}

setTimeout(() => {
  canvas.style.opacity = 1;
  canvas.style.transition = '1s'
  init();
  animate();

  setTimeout(() => {
    window.hello = true;
  }, 5000);
}, 6000);
