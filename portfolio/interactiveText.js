const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 900;

ctx.fillStyle = '#FF5F26';
ctx.font = '15px Verdana';
ctx.fillText('Gosia', 0, 30);

ctx.fillStyle = 'white';
ctx.font = '15px Verdana';
ctx.fillText('Szulc', 0, 50);

const textCoordinates = ctx.getImageData(0, 0, 300, 100);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

const mouse = {
  x: undefined,
  y: undefined,
  radius: 50
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
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 70;
    this.color = color;
    this.baseColor = this.color;
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
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
      this.x -= finalMovementX;
      this.y -= finalMovementY;
    } else if (distance > mouse.radius && distance < mouse.radius + 50) {
      if (this.y > canvas.height  * 0.4) {
        this.color = 'rgba(255,95,38)';
      } else {
        this.color = 'rgba(255,255,255, 1)';
      }

    } else {  // make particles move back to their original position if they're not already on it
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx/10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy/10;
      }
      this.color = this.baseColor;
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
        particlesArray.push(new Particle(positionX * 10, positionY * 10, color));
      }
    }
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  connect();
  requestAnimationFrame(animate);
}
animate();

function connect() {
  let opacity = 1;
  particlesArray.forEach((particle, i) => {
    for (let j = i; j < particlesArray.length; j++) {
      let dx = particle.x - particlesArray[j].x;
      let dy = particle.y - particlesArray[j].y;
      let distance = Math.hypot(dx, dy);

      if (distance < 25) {
        opacity = 1 - distance / 25;
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
