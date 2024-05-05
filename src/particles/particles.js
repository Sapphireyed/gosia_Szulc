export function prticlesMove() {
  sessionStorage.setItem('gszulc-color', 'rainbow');
  handleRainbowClick();
  handlePicker();

  const canvas = document.getElementById('canvas-move');
  const ctx = canvas.getContext('2d');
  const particlesArray = [];

  let hue = 0;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })

  const getTouchPos = (event) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.touches[0].clientX - rect.left,
      y: event.touches[0].clientY - rect.top
    };
  };

  canvas.addEventListener('mousemove', (event) => {
    const mouse = {
      x: event.x - 300,
      y: event.y - 250
    };
    createParticles(mouse);
  });

  canvas.addEventListener('touchmove', (event) => {
    const touch = getTouchPos(event);
    createParticles(touch);
  });

  function createParticles(position) {
    for (let i = 0; i < 10; i++) {
      particlesArray.push(new Particle(position.x, position.y));
    }
  }

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 15;
      this.speedX = Math.random() * 5 - 0.2;
      this.speedY = Math.random() * 5 - 0.2;
      if (sessionStorage.getItem('gszulc-color') === 'rainbow') {
        this.color = `hsl(${hue}, 100%, 50%)`;
      } else {
        this.color = document.querySelector('#favcolor').value
      }
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill()
    }
  }

  function handleParticles() {
    particlesArray.forEach((particle, i) => {
      particle.update();
      particle.draw();

      for (let j = i; j < particlesArray.length; j++) {
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
          ctx.closePath()
        }
      }

      if (particle.size <= 0.2) {
        particlesArray.splice(i, 1)
        i--
      }
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue += 1;
    const animatingMove = requestAnimationFrame(animate);

    if (sessionStorage.getItem('animation-move') === 'stopped') {
      cancelAnimationFrame(animatingMove)
    }
  }

  animate();

}

function handleRainbowClick() {
  const rainbowButton = document.querySelector('.color-rainbow');
  rainbowButton.addEventListener('click', () => {
    const picker = document.querySelector('.color form');
    picker.style.display = 'none !important;';
    sessionStorage.setItem('gszulc-color', 'rainbow');
  })
}

function handlePicker() {
  const picker = document.querySelector('.color #favcolor');
  picker.addEventListener('change', () => {
    sessionStorage.setItem('gszulc-color', picker.value);
  })
}
