// Equations Background Animation
const equationsBackground = document.getElementById('equations-background');
const equations = [
  // Optimization / Numerical Methods
  '$$x_{k+1} = x_k - \\alpha \\nabla f(x_k)$$',
  '$$x_{k+1} = x_k - \\frac{f(x_k)}{f\'(x_k)}$$',
  '$$L(x,\\lambda) = f(x) + \\lambda^T g(x)$$',
  '$$\\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) = 0$$',
  '$$H = \\left[\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}\\right]$$',
  '$$x_{k+1} = x_k + \\alpha_k p_k$$',
  '$$p_k = -\\nabla f(x_k)$$',
  '$$\\min_x \\frac{1}{2}x^T Qx + c^T x \\text{ s.t. } Ax \\leq b$$',
  '$$\\min c^T x \\text{ s.t. } Ax = b, x \\geq 0$$',
  '$$\\min_p \\frac{1}{2}p^T Hp + g^T p \\text{ s.t. } \\|p\\| \\leq \\Delta$$',
  '$$x_{n+1} = x_n + h f(t_n, x_n)$$',
  '$$k_1 = f(t_n, x_n), \\quad k_2 = f(t_n + \\frac{h}{2}, x_n + \\frac{h}{2}k_1)$$',
  '$$x_{n+1} = x_n + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$',
  '$$x_{n+1} = x_n + h f(t_{n+1}, x_{n+1})$$',
  '$$x_{n+1} = x_n + \\frac{h}{2}(f(t_n, x_n) + f(t_{n+1}, x_{n+1}))$$',
  '$$x_{k+1} = g(x_k)$$',
  '$$A = LU$$',
  '$$A = LL^T$$',
  '$$A = U\\Sigma V^T$$',
  '$$A = Q\\Lambda Q^T$$',
  '$$f(x) \\approx f(x_0) + f\'(x_0)(x-x_0) + \\frac{f\'\'(x_0)}{2}(x-x_0)^2 + \\ldots$$',
  '$$\\int_a^b f(x)dx \\approx \\sum_{i=0}^n w_i f(x_i)$$',
  '$$\\frac{du}{dx} \\approx \\frac{u_{i+1} - u_i}{\\Delta x}$$',
  '$$\\frac{du}{dx} \\approx \\frac{u_{i+1} - u_{i-1}}{2\\Delta x}$$',
  '$$R(h) = \\frac{4f(h/2) - f(h)}{3}$$',
  // PDEs
  '$$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$$',
  '$$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$$',
  '$$\\nabla^2 u = 0, \\quad \\nabla^2 u = f(x)$$',
  '$$\\frac{\\partial u}{\\partial t} + u\\frac{\\partial u}{\\partial x} = \\nu \\frac{\\partial^2 u}{\\partial x^2}$$',
  '$$\\frac{\\partial u}{\\partial t} + c\\frac{\\partial u}{\\partial x} = 0$$',
  '$$\\frac{\\partial u}{\\partial t} + v\\frac{\\partial u}{\\partial x} = D\\frac{\\partial^2 u}{\\partial x^2}$$',
  '$$\\frac{u_{i-1,j} + u_{i+1,j} + u_{i,j-1} + u_{i,j+1} - 4u_{i,j}}{\\Delta x^2} = 0$$',
  '$$\\frac{c\\Delta t}{\\Delta x} \\leq 1$$',
  '$$\\frac{dU}{dt} = AU + f$$',
  // Control
  '$$\\dot{x} = Ax + Bu, \\quad y = Cx + Du$$',
  '$$J = \\int_0^{\\infty} (x^T Qx + u^T Ru) dt$$',
  '$$A^T P + PA - PBR^{-1}B^T P + Q = 0$$',
  '$$u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de(t)}{dt}$$',
  '$$\\dot{V}(x) = \\frac{\\partial V}{\\partial x}\\dot{x} \\leq 0$$',
  // Game Theory
  '$$u_i(x_i^*, x_{-i}^*) \\geq u_i(x_i, x_{-i}^*), \\quad \\forall i, x_i$$',
  '$$\\min_x \\max_y f(x,y)$$',
  '$$\\sum_i p_i = 1, \\quad p_i \\geq 0$$',
  // Machine Learning / Inverse Problems
  '$$y = X\\beta + \\epsilon$$',
  '$$p(y=1|x) = \\frac{1}{1 + e^{-x^T\\beta}}$$',
  '$$\\nabla_\\theta L(\\theta) = \\frac{\\partial}{\\partial \\theta} \\sum_i \\ell(f_\\theta(x_i), y_i)$$',
  '$$\\hat{\\beta} = (X^T X)^{-1} X^T y$$',
  '$$a^{(l)} = \\sigma(W^{(l)} a^{(l-1)} + b^{(l)})$$',
  '$$D_{KL}(P\\|Q) = \\sum_i P(i) \\log \\frac{P(i)}{Q(i)}$$'
];

let equationDisplays = [];
let usedEquations = new Set();
let lastSide = 'right'; // Track last side used for alternating

function initEquations() {
  if (!equationsBackground) return;
  
  // Get hero name element to position equations around it
  const heroName = document.querySelector('.hero-name');
  if (!heroName) return;
  
  function createEquationDisplay() {
    const display = document.createElement('div');
    display.className = 'equation-display';
    equationsBackground.appendChild(display);
    return display;
  }
  
  function getRandomUnusedEquation() {
    let available = equations.filter((_, idx) => !usedEquations.has(idx));
    if (available.length === 0) {
      usedEquations.clear();
      available = equations;
    }
    const randomIdx = Math.floor(Math.random() * available.length);
    const eqIdx = equations.indexOf(available[randomIdx]);
    usedEquations.add(eqIdx);
    return { eq: available[randomIdx], idx: eqIdx };
  }
  
  function positionEquation(display, side, verticalOffset, rotation = 0) {
    const heroRect = heroName.getBoundingClientRect();
    const containerRect = equationsBackground.getBoundingClientRect();
    
    // Position on left or right side
    let x;
    if (side === 'left') {
      // Left side: position near left edge with some margin
      x = 80 + Math.random() * 500; // 50-150px from left edge
    } else {
      // Right side: position near right edge with some margin
      const containerWidth = containerRect.width;
      x = containerWidth - 180 - Math.random() * 500; // 50-150px from right edge
    }
    
    // Vertical position: Fill the upper portion of the hero section (above Yash Jain)
    // Use the top of the container as reference, not the name
    const containerHeight = containerRect.height;
    const nameTop = heroRect.top - containerRect.top;
    
    // Position in the upper portion of the screen, well above the name
    let y;
    if (verticalOffset === 'top') {
      // Very top: 5-15% from top of hero section
      y = containerHeight * 0.05 + Math.random() * (containerHeight * 0.50);
    } else {
      // Upper-middle: 15-30% from top of hero section (still well above name)
      y = containerHeight * 0.15 + Math.random() * (containerHeight * 0.50);
    }
    
    display.style.left = `${x}px`;
    display.style.top = `${y}px`;
    // Small rotation for visual interest, but keep it readable
    display.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    display.dataset.side = side;
    display.dataset.verticalOffset = verticalOffset;
    display.dataset.rotation = rotation;
  }
  
  function updateEquationPositions() {
    equationDisplays.forEach(display => {
      if (display.dataset.side && display.dataset.verticalOffset) {
        const side = display.dataset.side;
        const verticalOffset = display.dataset.verticalOffset;
        const rotation = parseFloat(display.dataset.rotation || 0);
        positionEquation(display, side, verticalOffset, rotation);
      }
    });
  }
  
  function spawnSingleEquation() {
    const display = createEquationDisplay();
    const { eq } = getRandomUnusedEquation();
    display.innerHTML = eq;
    
    // Alternate between left and right sides
    lastSide = lastSide === 'left' ? 'right' : 'left';
    const side = lastSide;
    // Position in upper or lower portion (randomly choose)
    const verticalOffset = Math.random() > 0.5 ? 'top' : 'bottom';
    const rotation = (Math.random() - 0.5) * 15; // Small rotation: -7.5 to +7.5 degrees
    positionEquation(display, side, verticalOffset, rotation);
    
    // Track spawn time for this equation
    display.dataset.spawnTime = Date.now();
    
    equationDisplays.push(display);
    
    // Render MathJax and fade in
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([display]).then(() => {
        display.classList.add('fade-in');
      });
    } else {
      display.classList.add('fade-in');
    }
    
    // Schedule fade out after 12 seconds (bright time)
    setTimeout(() => {
      if (display.parentNode) {
        display.classList.remove('fade-in');
        display.classList.add('fade-out');
        
        // Remove from DOM after fade out
        setTimeout(() => {
          if (display.parentNode) {
            display.parentNode.removeChild(display);
            // Remove from array
            const index = equationDisplays.indexOf(display);
            if (index > -1) {
              equationDisplays.splice(index, 1);
            }
          }
        }, 5000); // 2 second fade out
      }
    }, 6000); // 4 seconds bright time
  }
  
  function scheduleNextSpawn() {
    // Random interval between 1-3 seconds for next spawn
    const delay = 750 + Math.random() * 500;
    setTimeout(() => {
      spawnSingleEquation();
      scheduleNextSpawn(); // Schedule the next one
    }, delay);
  }
  
  // Spawn initial equations (3-4 of them)
  const initialCount = 3 + Math.floor(Math.random() * 2);
  for (let i = 0; i < initialCount; i++) {
    setTimeout(() => {
      spawnSingleEquation();
    }, i * 1000); // Stagger initial spawns by 1 second each
  }
  
  // Start the random spawning cycle
  setTimeout(() => {
    scheduleNextSpawn();
  }, initialCount * 1000 + 2000);
  
  // Update positions on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateEquationPositions, 100);
  });
}

// Initialize equations
function waitForMathJax() {
  if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
    window.MathJax.startup.promise.then(() => {
      initEquations();
    }).catch(() => {
      // Fallback if MathJax fails
      setTimeout(initEquations, 500);
    });
  } else if (window.MathJax && window.MathJax.typesetPromise) {
    // MathJax is already loaded
    initEquations();
  } else {
    // Wait a bit and try again
    setTimeout(waitForMathJax, 200);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForMathJax);
} else {
  waitForMathJax();
}

// Particle Field for About Me Section
const particleCanvas = document.getElementById('particle-canvas');
const particleCtx = particleCanvas.getContext('2d');
let mouseX = 0;
let mouseY = 0;

function resizeParticleCanvas() {
  const aboutSection = document.querySelector('.about-me');
  if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect();
    particleCanvas.width = rect.width;
    particleCanvas.height = rect.height;
  }
}
resizeParticleCanvas();
window.addEventListener('resize', resizeParticleCanvas);

// Particle class
class Particle {
  constructor() {
    this.reset();
  }
  
  reset() {
    this.x = Math.random() * particleCanvas.width;
    this.y = Math.random() * particleCanvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
    // Random color from red, orange, yellow spectrum
    const colorValue = Math.random();
    if (colorValue < 0.33) {
      this.color = { r: 255, g: 50, b: 50 }; // Red
    } else if (colorValue < 0.66) {
      this.color = { r: 255, g: 165, b: 0 }; // Orange
    } else {
      this.color = { r: 255, g: 255, b: 0 }; // Yellow
    }
  }
  
  update() {
    // Calculate distance to mouse
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 150;
    
    if (distance < maxDistance) {
      // Push particle away from mouse
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(dy, dx);
      this.vx -= Math.cos(angle) * force * 0.3;
      this.vy -= Math.sin(angle) * force * 0.3;
    }
    
    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;
    
    // Damping
    this.vx *= 0.98;
    this.vy *= 0.98;
    
    // Wrap around edges
    if (this.x < 0) this.x = particleCanvas.width;
    if (this.x > particleCanvas.width) this.x = 0;
    if (this.y < 0) this.y = particleCanvas.height;
    if (this.y > particleCanvas.height) this.y = 0;
  }
  
  draw() {
    particleCtx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
    particleCtx.beginPath();
    particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    particleCtx.fill();
  }
}

// Create particles
const particles = [];
for (let i = 0; i < 150; i++) {
  particles.push(new Particle());
}

// Mouse tracking
const aboutSection = document.querySelector('.about-me');
if (aboutSection) {
  aboutSection.addEventListener('mousemove', (e) => {
    const rect = aboutSection.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  
  aboutSection.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });
}

function animateParticles() {
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Typewriter effect (without "Yash Jain" - that stays permanent)
const heroText = document.getElementById('hero-text');
const phrases = [
  "Senior Undergrad @ UT Austin",
  "Double Major: Computational Engineering & Mathematics",
  "Research: Control, Game Theory, Autonomous Systems"
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function type() {
  if (i >= phrases.length) i = 0;
  const fullPhrase = phrases[i];
  if (!isDeleting) {
    currentPhrase.push(fullPhrase[j]);
    heroText.textContent = currentPhrase.join('');
    j++;
    if (j === fullPhrase.length) { isDeleting = true; setTimeout(type, 1500); return; }
  } else {
    currentPhrase.pop();
    heroText.textContent = currentPhrase.join('');
    if (currentPhrase.length === 0) { isDeleting = false; j = 0; i++; }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Advanced car animation with lane changing and turning
const canvas = document.getElementById('cars-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
canvas.width = window.innerWidth;
  canvas.height = 200;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Define lanes
const lanes = [40, 80, 120, 160];
const laneWidth = 40;

// Car class with behaviors
class Car {
  constructor(x, y, speed, color, lane) {
    this.x = x;
    // Center car vertically in lane (y parameter is lane center, car height is 20, so subtract 10)
    this.y = y - 10;
    this.targetY = lanes[lane] - 10; // Store centered target position
    this.speed = speed;
    this.maxSpeed = speed; // Store original max speed
    this.color = color;
    this.w = 50;
    this.h = 20;
    this.lane = lane;
    this.laneChangeProgress = 0;
    this.isChangingLanes = false;
    this.targetLane = lane;
    this.turnDirection = Math.random() > 0.5 ? 1 : -1;
    this.turnProgress = 0;
    this.isTurning = false;
    this.angle = 0;
    this.avoidingCollision = false;
    this.lastLaneChangeTime = 0; // Timestamp of when last lane change completed
  }

  // Check collision with another car
  checkCollision(otherCar) {
    const margin = 10; // Safety margin
    return (
      this.x < otherCar.x + otherCar.w + margin &&
      this.x + this.w + margin > otherCar.x &&
      this.y < otherCar.y + otherCar.h + margin &&
      this.y + this.h + margin > otherCar.y
    );
  }

  // Check if lane is clear for lane change
  isLaneClear(targetLane, allCars) {
    const targetY = lanes[targetLane] - 10; // Center in lane
    const safetyDistance = 80; // Minimum distance between cars
    
    for (let car of allCars) {
      if (car === this) continue;
      
      // Check if car is in similar x position (ahead or behind)
      const xDistance = Math.abs(car.x - this.x);
      if (xDistance < safetyDistance) {
        // Check if car is in the target lane (using centered positions)
        const carLaneY = lanes[car.lane] - 10;
        if (Math.abs(carLaneY - targetY) < 15 || Math.abs(car.y - targetY) < 15) {
          return false;
        }
      }
    }
    return true;
  }

  update(allCars) {
    // Move forward
    this.x += this.speed;
    
    // Check if 2 seconds have passed since last lane change (used for both collision and random lane changes)
    const currentTime = Date.now();
    const canChangeLanes = (currentTime - this.lastLaneChangeTime) >= 2000;
    
    // Collision avoidance - if too close to car ahead, switch lanes and reduce max speed
    let carAhead = null;
    let minDistance = Infinity;
    
    for (let car of allCars) {
      if (car === this) continue;
      
      // Check if car is ahead in same lane (using centered positions)
      if (car.x > this.x && Math.abs(car.y - this.y) < 25) {
        const distance = car.x - (this.x + this.w);
        if (distance < minDistance && distance > 0 && distance < 100) {
          minDistance = distance;
          carAhead = car;
        }
      }
    }
    
    // If too close to car ahead and not already changing lanes, switch lanes
    if (carAhead && !this.isChangingLanes && minDistance < 100 && canChangeLanes) {
      this.avoidingCollision = true;
      // Reduce max speed when avoiding collision
      this.maxSpeed = Math.max(2, this.maxSpeed * 0.7);
      
      // Try to switch to an adjacent lane
      const possibleLanes = [];
      if (this.lane > 0) possibleLanes.push(this.lane - 1);
      if (this.lane < lanes.length - 1) possibleLanes.push(this.lane + 1);
      
      // Try lanes in random order
      possibleLanes.sort(() => Math.random() - 0.5);
      
      for (let newLane of possibleLanes) {
        if (this.isLaneClear(newLane, allCars)) {
          this.targetLane = newLane;
          this.isChangingLanes = true;
          this.laneChangeProgress = 0;
          break;
        }
      }
      
      // If can't switch lanes, slow down significantly
      if (!this.isChangingLanes) {
        this.speed = Math.max(1, this.speed * 0.9);
      }
    } else {
      // Gradually restore max speed if not avoiding collision
      if (this.avoidingCollision && !carAhead) {
        this.maxSpeed = Math.min(this.maxSpeed * 1.01, 3.5);
        if (this.maxSpeed >= 3.2) {
          this.avoidingCollision = false;
        }
      }
      
      // Gradually restore speed towards max speed
      if (this.speed < this.maxSpeed) {
        this.speed = Math.min(this.maxSpeed, this.speed * 1.02);
      }
    }
    
    // Random lane changing behavior (when not avoiding collision)
    if (!this.isChangingLanes && !this.avoidingCollision && canChangeLanes && Math.random() < 0.002) {
      const newLane = this.lane + (Math.random() > 0.5 ? 1 : -1);
      if (newLane >= 0 && newLane < lanes.length && this.isLaneClear(newLane, allCars)) {
        this.targetLane = newLane;
        this.isChangingLanes = true;
        this.laneChangeProgress = 0;
      }
    }
    
    // Smooth lane change
    if (this.isChangingLanes) {
      this.laneChangeProgress += 0.02;
      const startY = lanes[this.lane] - 10; // Center in lane
      const endY = lanes[this.targetLane] - 10; // Center in lane
      this.y = startY + (endY - startY) * this.laneChangeProgress;
      
      if (this.laneChangeProgress >= 1) {
        this.lane = this.targetLane;
        this.isChangingLanes = false;
        this.laneChangeProgress = 0;
        // Record the time when lane change completes
        this.lastLaneChangeTime = Date.now();
      }
    } else {
      // Smooth alignment to lane (centered)
      const targetY = lanes[this.lane] - 10; // Center in lane
      if (Math.abs(this.y - targetY) > 0.5) {
        this.y += (targetY - this.y) * 0.1;
      }
    }
    
    // Random turning behavior
    if (!this.isTurning && Math.random() < 0.001) {
      this.isTurning = true;
      this.turnProgress = 0;
      this.turnDirection = Math.random() > 0.5 ? 1 : -1;
    }
    
    if (this.isTurning) {
      this.turnProgress += 0.05;
      this.angle = Math.sin(this.turnProgress * Math.PI) * 15 * this.turnDirection;
      if (this.turnProgress >= 1) {
        this.isTurning = false;
        this.angle = 0;
      }
    }
    
    // Note: Cars are now removed when off screen instead of resetting
  }

  draw() {
    ctx.save();
    ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    
    // Add some detail - windows
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(-this.w / 2 + 5, -this.h / 2 + 3, this.w / 3, this.h - 6);
    ctx.fillRect(this.w / 6, -this.h / 2 + 3, this.w / 3, this.h - 6);
    
    ctx.restore();
  }
}

// Create multiple cars with different behaviors
const cars = [];
const colors = ["#cc0000", "#00ff99", "#3b82ff", "#ffaa00", "#ff00ff", "#00ffff", "#ffff00"];

// Function to get random color (equal probability for all colors)
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Initial cars
for (let i = 0; i < 12; i++) {
  const lane = Math.floor(Math.random() * lanes.length);
  const speed = 1.5 + Math.random() * 2; // Slower speeds: 1.5-3.5
  const color = getRandomColor();
  cars.push(new Car(
    Math.random() * canvas.width - 200,
    lanes[lane], // Pass lane center, constructor will center the car
    speed,
    color,
    lane
  ));
}

// Spawn new cars more frequently
let lastSpawnTime = Date.now();
const spawnInterval = 700; // Spawn every 0.7 seconds for heavy traffic

// Draw road
function drawRoad() {
  // Road background
  ctx.fillStyle = '#2a2a2a';
  ctx.fillRect(0, 20, canvas.width, 160);
  
  // Lane dividers
  ctx.strokeStyle = '#ffff00';
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 10]);
  lanes.forEach((laneY, i) => {
    if (i < lanes.length - 1) {
      const dividerY = (lanes[i] + lanes[i + 1]) / 2;
      ctx.beginPath();
      ctx.moveTo(0, dividerY);
      ctx.lineTo(canvas.width, dividerY);
      ctx.stroke();
    }
  });
  ctx.setLineDash([]);
  
  // Road edges
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(canvas.width, 20);
  ctx.moveTo(0, 180);
  ctx.lineTo(canvas.width, 180);
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  
  // Spawn new cars periodically
  const now = Date.now();
  if (now - lastSpawnTime > spawnInterval) {
    const lane = Math.floor(Math.random() * lanes.length);
    const speed = 1.5 + Math.random() * 2; // Slower speeds: 1.5-3.5
    const color = getRandomColor();
    cars.push(new Car(
      -60, // Start off-screen
      lanes[lane], // Pass lane center, constructor will center the car
      speed,
      color,
      lane
    ));
    lastSpawnTime = now;
  }
  
  // Update all cars first
  cars.forEach(car => {
    car.update(cars);
  });
  
  // Remove cars that are far off screen
  for (let i = cars.length - 1; i >= 0; i--) {
    if (cars[i].x > canvas.width + 200) {
      cars.splice(i, 1);
    }
  }
  
  // Then draw all cars
  cars.forEach(car => {
    car.draw();
  });
  
  requestAnimationFrame(animate);
}
animate();

// Research slideshow
let slideIndex = 0;

function initSlideshow() {
const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides-container');
  
  if (!slidesContainer || slides.length === 0) {
    setTimeout(initSlideshow, 100);
    return;
  }
  
  // Function to get responsive gap and offset
  function getResponsiveValues() {
    const parentElement = slidesContainer.parentElement;
    const viewportWidth = parentElement.offsetWidth || window.innerWidth;
    const isMobile = viewportWidth < 768;
    return {
      gap: isMobile ? 50 : 100,
      offset: isMobile ? 30 : 150,
      viewportWidth: viewportWidth
    };
  }
  
  function updateSlideshowDimensions() {
    const { gap, viewportWidth } = getResponsiveValues();
    const totalWidth = slides.length * viewportWidth + (slides.length - 1) * gap;
    slidesContainer.style.width = `${totalWidth}px`;
    
    slides.forEach(slide => {
      slide.style.width = `${viewportWidth}px`;
      slide.style.minWidth = `${viewportWidth}px`;
    });
  }
  
  updateSlideshowDimensions();

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slideIndex = index;
    
    // Calculate translate based on viewport width + gap between slides
    // Responsive offset: smaller on mobile, larger on desktop
    const { gap, offset, viewportWidth } = getResponsiveValues();
    const translateX = -(viewportWidth * slideIndex + gap * slideIndex) - offset;
    slidesContainer.style.transform = `translateX(${translateX}px)`;
  }
  
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(slideIndex - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(slideIndex + 1);
    });
  }
  
  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateSlideshowDimensions();
  showSlide(slideIndex);
    }, 100);
  });
  
  // Initialize on load - ensure we start at slide 0
  showSlide(0);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSlideshow);
} else {
  initSlideshow();
}

