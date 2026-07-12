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
    const delay = 1500 + Math.random() * 500;
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

// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', waitForMathJax);
// } else {
//   waitForMathJax();
// }

(function initAboutMeField() {
  const canvas = document.getElementById('particle-canvas');
  const aboutSection = document.querySelector('.about-me');
  if (!canvas || !aboutSection) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  let mouseX = -1000;
  let mouseY = -1000;

  const influenceRadius = 90;
  const forceFactor = 220;
  const idleAmount = 1;
  const linkDistance = 68;

  const palette = [
    { r: 255, g: 100, b: 0 },
    { r: 255, g: 180, b: 0 },
    { r: 255, g: 80, b: 40 },
    { r: 220, g: 50, b: 20 },
    { r: 255, g: 140, b: 20 }
  ];

  function resize() {
    const rect = aboutSection.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = width;
    canvas.height = height;
    canvas.style.height = height + 'px';

    const spacing = 30;
    const cols = Math.max(2, Math.floor(width / spacing));
    const rows = Math.max(2, Math.floor(height / spacing));
    particles = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        particles.push({
          x: (j + 0.5) * (width / cols),
          y: (i + 0.5) * (height / rows),
          baseX: (j + 0.5) * (width / cols),
          baseY: (i + 0.5) * (height / rows),
          colorIndex: Math.floor(Math.random() * palette.length),
          baseRadius: 2 + Math.random() * 1.4,
          colorPhase: Math.random() * Math.PI * 2,
          colorSpeed: 0.25 + Math.random() * 0.35,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.08 + Math.random() * 0.35,
          driftPhaseX: Math.random() * Math.PI * 2,
          driftPhaseY: Math.random() * Math.PI * 2,
          driftSpeed: 0.05 + Math.random() * 0.08,
          driftAmp: 10 + Math.random() * 12
        });
      }
    }
  }

  function animate() {
    if (!ctx || !width || !height) {
      requestAnimationFrame(animate);
      return;
    }

    const now = Date.now();
    ctx.clearRect(0, 0, width, height);

    const springStrength = 0.15;
    const centerX = width / 2;
    const centerY = height / 2;
    const time = now * 0.0008;
    const drawState = [];

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      let targetX = p.baseX + Math.sin(time * p.driftSpeed + p.driftPhaseX) * p.driftAmp;
      let targetY = p.baseY + Math.cos(time * p.driftSpeed * 0.9 + p.driftPhaseY) * p.driftAmp;

      const px = p.x - centerX;
      const py = p.y - centerY;
      const len = Math.sqrt(px * px + py * py) || 1;
      const tx = -py / len;
      const ty = px / len;
      const swirl = Math.sin(time + i * 0.15) * 0.12 * idleAmount;
      p.x += tx * swirl + (Math.random() - 0.5) * 0.15 * idleAmount;
      p.y += ty * swirl + (Math.random() - 0.5) * 0.15 * idleAmount;
      targetX += Math.sin(time * 1.4 + p.driftPhaseX) * 3 * idleAmount;
      targetY += Math.cos(time * 1.2 + p.driftPhaseY) * 3 * idleAmount;

      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let fx = (targetX - p.x) * springStrength;
      let fy = (targetY - p.y) * springStrength;

      if (dist < influenceRadius && dist > 0) {
        const f = (1 - dist / influenceRadius) * forceFactor / 100;
        fx -= (dx / dist) * f;
        fy -= (dy / dist) * f;
      }

      p.x += fx;
      p.y += fy;

      const paletteLen = palette.length;
      const colorMix = (Math.sin(time * p.colorSpeed + p.colorPhase) + 1) * 0.5;
      const c0 = palette[p.colorIndex % paletteLen];
      const c1 = palette[(p.colorIndex + 1) % paletteLen];
      let cr = Math.round(c0.r + (c1.r - c0.r) * colorMix);
      let cg = Math.round(c0.g + (c1.g - c0.g) * colorMix);
      let cb = Math.round(c0.b + (c1.b - c0.b) * colorMix);

      const brightness = 0.85 + 0.12 * Math.sin(time * p.pulseSpeed * 1.3 + p.pulsePhase);
      cr = Math.min(255, Math.round(cr * brightness));
      cg = Math.min(255, Math.round(cg * brightness));
      cb = Math.min(255, Math.round(cb * brightness));

      const radius = p.baseRadius * (0.85 + 0.35 * Math.sin(time * p.pulseSpeed + p.pulsePhase));
      const alpha = 0.45 + 0.22 * colorMix;

      drawState.push({ x: p.x, y: p.y, cr, cg, cb, radius, alpha });
    }

    for (let i = 0; i < drawState.length; i++) {
      for (let j = i + 1; j < drawState.length; j++) {
        const a = drawState[i];
        const b = drawState[j];
        const ldx = a.x - b.x;
        const ldy = a.y - b.y;
        const linkDist = Math.sqrt(ldx * ldx + ldy * ldy);
        if (linkDist < linkDistance) {
          const linkAlpha = (1 - linkDist / linkDistance) * 0.32;
          ctx.strokeStyle = `rgba(255, 120, 40, ${linkAlpha})`;
          ctx.lineWidth = 1.85;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < drawState.length; i++) {
      const d = drawState[i];
      ctx.fillStyle = `rgba(${d.cr}, ${d.cg}, ${d.cb}, ${d.alpha})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  aboutSection.addEventListener('mousemove', (e) => {
    const rect = aboutSection.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  aboutSection.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(animate);
})();

// Typewriter effect (without "Yash Jain" - that stays permanent)
const heroText = document.getElementById('hero-text');
const phrases = [
  "PhD Student @ University of Pennsylvania",
  "Computer and Information Science",
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
if (heroText) type();

// Advanced car animation with lane changing and turning
const canvas = document.getElementById('cars-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

function resizeCanvas() {
  if (!canvas || !ctx) return;
canvas.width = window.innerWidth;
  canvas.height = 200;
}
if (canvas && ctx) {
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
}

// Define lanes (only when cars canvas exists)
if (canvas && ctx) {
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
    const canChangeLanes = (currentTime - this.lastLaneChangeTime) >= 200;
    
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
const colors = ["#d65c5c", "#00ff99", "#3b82ff", "#ffaa00", "#ff00ff", "#00ffff", "#ffff00"];

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
}

// Research section: either slideshow (legacy) or new photo + scroll layout
let slideIndex = 0;

function initSlideshow() {
  // If the new research interests section is present, skip slideshow init
  if (document.querySelector('.research-interests-section')) {
    return;
  }
  
  const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides-container');
  const slideshowParent = slidesContainer?.parentElement;
  
  if (!slidesContainer || slides.length === 0 || !slideshowParent) {
    setTimeout(initSlideshow, 100);
    return;
  }
  
  // Get the viewport width (visible area of slideshow)
  function getViewportWidth() {
    // Use the actual visible width of the slideshow container
    const rect = slideshowParent.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(slideshowParent);
    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
    const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
    // Subtract padding to get actual content width
    const viewportWidth = rect.width - paddingLeft - paddingRight;
    return Math.max(Math.floor(viewportWidth), 300);
  }
  
  // Get responsive gap between slides
  function getGap() {
    const width = getViewportWidth();
    if (width < 768) return 50; // Increased from 20
    if (width < 1200) {
      const scale = (width - 768) / (1200 - 768);
      return 50 + (scale * 100); // 50 to 150 (increased from 20-100)
    }
    return 150; // Increased from 100
  }
  
  // Update slide dimensions to match viewport
  function updateDimensions() {
    if (!slidesContainer || slides.length === 0) return;
    
    const viewportWidth = getViewportWidth();
    const gap = getGap();
    
    // Ensure viewport width is valid
    if (viewportWidth <= 0 || isNaN(viewportWidth)) {
      return;
    }
    
    // Set container width to fit all slides - ensure it's always wide enough
    const totalWidth = slides.length * viewportWidth + (slides.length - 1) * gap;
    slidesContainer.style.width = `${Math.max(totalWidth, viewportWidth * slides.length)}px`;
    slidesContainer.style.minWidth = `${totalWidth}px`;
    
    // Set each slide to viewport width and ensure they're always visible
    slides.forEach((slide, index) => {
      if (!slide || !slide.parentElement) {
        return;
      }
      
      // Ensure slide has proper dimensions
      slide.style.width = `${viewportWidth}px`;
      slide.style.minWidth = `${viewportWidth}px`;
      slide.style.maxWidth = `${viewportWidth}px`;
      slide.style.flexShrink = '0';
      slide.style.flexGrow = '0';
      slide.style.display = 'flex';
      slide.style.visibility = 'visible';
      slide.style.opacity = '1';
      // Override CSS margin-right - we'll use gap in calculation instead
      slide.style.marginRight = index < slides.length - 1 ? `${gap}px` : '0px';
      
      // Ensure slide content is visible
      const slideImg = slide.querySelector('img');
      const slideText = slide.querySelector('h3, p');
      if (slideImg) {
        slideImg.style.display = 'block';
        slideImg.style.visibility = 'visible';
      }
      if (slideText) {
        slideText.style.visibility = 'visible';
      }
    });
    
    // Force a reflow and verify dimensions
    void slidesContainer.offsetHeight;
    
    // Verify all slides are still in the container
    const slidesInContainer = slidesContainer.querySelectorAll('.slide');
    if (slidesInContainer.length !== slides.length) {
      console.warn('Slide count mismatch! Expected:', slides.length, 'Found:', slidesInContainer.length);
    }
  }
  
  // Center a slide using fixed offsets - clean and simple approach
  function centerSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slideIndex = index;
    
    // Update dimensions first
    updateDimensions();
    
    // Wait for dimensions to be applied
    setTimeout(() => {
      const viewportWidth = getViewportWidth();
      const gap = getGap();
      
      if (viewportWidth <= 0 || slides.length === 0) return;
      
      // Calculate the fixed offset per slide (viewport width + gap)
      const slideOffset = viewportWidth + gap;
      
      // Calculate viewport center - use viewportWidth which already accounts for padding
      const viewportCenter = viewportWidth / 2;
      
      // Calculate where the slide should be positioned
      // Slide 0 starts at 0, slide 1 at slideOffset, slide 2 at 2*slideOffset, etc.
      const slideLeftEdge = slideIndex * slideOffset;
      
      // Calculate slide center
      const slideCenter = slideLeftEdge + (viewportWidth / 2);
      
      // Calculate translate to center: move container so slide center aligns with viewport center
      // For slide 0: translateX = viewportCenter - (0 + viewportWidth/2) = viewportCenter - viewportWidth/2 = 0
      // For slide 1: translateX = viewportCenter - (slideOffset + viewportWidth/2) = viewportCenter - slideOffset - viewportWidth/2
      let translateX = viewportCenter - slideCenter;
      
      // Round to whole pixels
      translateX = Math.round(translateX);
      
      // Apply transform
      const wasResizing = isResizing;
      if (wasResizing) {
        slidesContainer.style.transition = 'none';
      } else {
        slidesContainer.style.transition = 'transform 0.5s ease';
      }
      
      slidesContainer.style.transform = `translateX(${translateX}px)`;
      
      // Re-enable transition after a moment if we disabled it
      if (wasResizing) {
        setTimeout(() => {
          slidesContainer.style.transition = 'transform 0.5s ease';
        }, 100);
      }
    }, 100);
  }
  
  // Initialize dimensions
  updateDimensions();
  centerSlide(0);
  
  // Button handlers
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => centerSlide(slideIndex - 1));
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => centerSlide(slideIndex + 1));
  }
  
  // Handle window resize - recalculate and recenter
  let resizeTimeout;
  let isResizing = false;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      isResizing = true;
      
      // Update dimensions
      updateDimensions();
      
      // Wait a moment for dimensions to apply, then recenter
      setTimeout(() => {
        // Ensure slideIndex is still valid
        if (slideIndex >= slides.length) slideIndex = slides.length - 1;
        if (slideIndex < 0) slideIndex = 0;
        
        // Recenter the current slide
        centerSlide(slideIndex);
        
        // Reset resizing flag after a delay
        setTimeout(() => {
          isResizing = false;
        }, 300);
      }, 150);
    }, 250); // Longer timeout to reduce lag spikes
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSlideshow);
} else {
  initSlideshow();
}

