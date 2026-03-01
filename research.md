---
title: "Research"
layout: default
permalink: /research/
---

<link rel="stylesheet" href="{{ '/assets/css/frontpage.css' | relative_url }}">

<section class="projects-page">
  <canvas id="projects-particle-canvas"></canvas>
  <h1>Research</h1>

  <div class="project-card-expandable">
    <div class="project-card-header">
      <h2>Bayesian Inverse Games with High-Dimensional Multi-Modal Observations</h2>
      <div class="project-tags">
        <span class="tag">Inverse Problems</span>
        <span class="tag">Bayesian Inference</span>
        <span class="tag">Multi-Agent Decision Making</span>
        <span class="tag">Multi-Modal Representation Learning</span>
        <span class="tag">Planning Under Uncertainty</span>
      </div>
    </div>
    
    <div class="project-section video-section">
      <h3>Model Comparison</h3>
      <div class="video-toggle-container">
        <div class="video-toggle-buttons">
          <button class="video-toggle-btn active" data-video="image-traj">
            Image + Trajectory Model
          </button>
          <button class="video-toggle-btn" data-video="traj-only">
            Trajectory-Only Model
          </button>
        </div>
        <div class="video-wrapper">
          <video id="bayesian-video" controls class="project-video" 
                 data-image-traj="{{ '/assets/images/Color_Image_Traj_converted.mp4' | relative_url }}"
                 data-traj-only="{{ '/assets/images/Color_Traj_only3_converted.mp4' | relative_url }}"
                 preload="auto"
                 playsinline>
            <source src="{{ '/assets/images/Color_Image_Traj_converted.mp4' | relative_url }}" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
            <source src="{{ '/assets/images/Color_Image_Traj_converted.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div id="video-error-message" style="display: none; color: #f5f5f5; padding: 20px; text-align: center; background-color: #2a2a2a; border-radius: 10px; margin-top: 10px;">
            <p><strong>Video Loading Error</strong></p>
            <p>The video file may be using an unsupported codec. Please try:</p>
            <ul style="text-align: left; display: inline-block;">
              <li>Re-encoding the video with H.264 codec</li>
              <li>Using a different browser</li>
              <li>Checking the video file format</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="project-overview">
      <p>This paper studies inverse games, where the goal is to infer latent agent objectives from observed behavior in strategic multi-agent settings. Rather than assuming perfect knowledge of agent intent, the framework explicitly models uncertainty and incorporates high-dimensional, multi-modal observations, combining trajectory data with visual scene information. By treating intent inference as a Bayesian inverse problem and differentiating through a dynamic game solver, the approach enables principled reasoning about ambiguity in complex autonomous driving scenarios.</p>
      <p><strong>Paper:</strong> <a href="https://arxiv.org/abs/2601.00696" target="_blank">https://arxiv.org/abs/2601.00696</a></p>
    </div>

    <button class="expand-button" aria-expanded="false">
      <span class="expand-text">Expand</span>
      <span class="collapse-text" style="display: none;">Collapse</span>
      <span class="expand-icon">▼</span>
    </button>

    <div class="project-details" style="display: none;">
      <div class="project-section">
        <h3>Work</h3>
        <ul>
          <li>Developed inverse dynamic game formulations for multi-agent systems, modeling agent interactions through generalized Nash equilibria</li>
          <li>Designed a Bayesian inference framework that represents latent agent intent probabilistically rather than deterministically</li>
          <li>Built a neural inference architecture combining a Variational Autoencoder (VAE) with DiNOv3-based visual embeddings to process high-dimensional image observations</li>
          <li>Integrated perception and dynamics by conditioning the inverse game on both trajectories and learned visual scene representations</li>
          <li>Implemented and evaluated the framework in CARLA, enabling realistic multi-agent autonomous driving experiments</li>
          <li>Performed Monte Carlo evaluations to quantify uncertainty, robustness, and inference accuracy across ambiguous interaction scenarios</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Impact</h3>
        <p>This work demonstrates that incorporating uncertainty and multi-modal perception into inverse games significantly improves intent inference in interactive environments. The resulting predictions are more robust to ambiguity, making the approach well-suited for safety-critical autonomous systems where incorrect assumptions about agent intent can lead to failure.</p>
      </div>
    </div>
  </div>

  <div class="project-card-expandable">
    <div class="project-card-header">
      <h2>Moncrief Summer Research Internship - Multi-Agent Inverse Games</h2>
      <div class="project-tags">
        <span class="tag">Autonomous Driving</span>
        <span class="tag">Multi-Agent Systems</span>
        <span class="tag">Vision-Based Inference</span>
        <span class="tag">Game-Theoretic Planning</span>
        <span class="tag">Simulation-Based Evaluation</span>
      </div>
    </div>
    
    <div class="project-section">
      <h3>Poster</h3>
      <img src="{{ '/assets/images/moncrief_poster.png' | relative_url }}" alt="Moncrief Poster" class="project-poster">
    </div>
    
    <div class="project-overview">
      <p>This project explored how agent intent can be inferred from multi-modal observations—specifically top-down images and partial trajectory data—using simplified driving scenarios. The focus was on demonstrating, in a controlled toy environment, that combining visual context with motion information enables better reasoning about agent goals than trajectories alone.</p>
      <p><strong>Links:</strong> <a href="https://oden.utexas.edu/news-and-events/news/Building-Skills-Connections-and-Confidence-Moncrief-Summer-Internship-Program-2025/" target="_blank">Moncrief Summer Internship Program</a></p>
    </div>

    <button class="expand-button" aria-expanded="false">
      <span class="expand-text">Expand</span>
      <span class="collapse-text" style="display: none;">Collapse</span>
      <span class="expand-icon">▼</span>
    </button>

    <div class="project-details" style="display: none;">
      <div class="project-section">
        <h3>Program</h3>
        <p>The Moncrief Summer Research Internship at the Oden Institute is a competitive undergraduate research program that immerses students in full-time computational science research under faculty mentorship, culminating in a formal poster presentation.</p>
      </div>

      <div class="project-section">
        <h3>Project Summary</h3>
        <p>This project explored how agent intent can be inferred from multi-modal observations—specifically top-down images and partial trajectory data—using simplified driving scenarios. The focus was on demonstrating, in a controlled toy environment, that combining visual context with motion information enables better reasoning about agent goals than trajectories alone.</p>
      </div>

      <div class="project-section">
        <h3>Work</h3>
        <ul>
          <li>Proposed an inference framework that estimates agent intent from top-down image observations and trajectory data</li>
          <li>Formulated and solved an amortized maximum likelihood problem by differentiating through a Nash game solver</li>
          <li>Implemented sequence modeling with LSTMs to encode trajectory information</li>
          <li>Designed custom VAEs to represent latent intent variables</li>
          <li>Built CNN-based perception models to extract structured information from image observations</li>
          <li>Validated the approach in toy multi-agent driving environments to demonstrate improved intent recovery under ambiguity</li>
        </ul>
      </div>

      <div class="project-section">
        <h3>Impact</h3>
        <p>This work provides an early demonstration that multi-modal perception materially improves inverse game inference, even in minimal settings. The results motivate extending inverse game frameworks beyond trajectory-only data and toward richer perceptual inputs, laying groundwork for safer and more informed multi-agent decision-making in autonomous systems.</p>
      </div>
    </div>
  </div>
</section>

<script>
// Particle Field for Research Page
function initProjectsParticles() {
  const projectsParticleCanvas = document.getElementById('projects-particle-canvas');
  if (!projectsParticleCanvas) return;
  
  const projectsParticleCtx = projectsParticleCanvas.getContext('2d');
  let projectsMouseX = 0;
  let projectsMouseY = 0;

  function resizeProjectsParticleCanvas() {
    const projectsSection = document.querySelector('.projects-page');
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      projectsParticleCanvas.width = rect.width;
      projectsParticleCanvas.height = rect.height;
      // Fix canvas element height so it doesn't grow when section expands (e.g. on card expand)
      projectsParticleCanvas.style.height = rect.height + 'px';
    }
  }
  resizeProjectsParticleCanvas();
  window.addEventListener('resize', resizeProjectsParticleCanvas);
  // Do not resize on expand/collapse - only on load and window resize

  // Particle class for research page
  class ProjectsParticle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * projectsParticleCanvas.width;
      this.y = Math.random() * projectsParticleCanvas.height;
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
      const dx = projectsMouseX - this.x;
      const dy = projectsMouseY - this.y;
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
      if (this.x < 0) this.x = projectsParticleCanvas.width;
      if (this.x > projectsParticleCanvas.width) this.x = 0;
      if (this.y < 0) this.y = projectsParticleCanvas.height;
      if (this.y > projectsParticleCanvas.height) this.y = 0;
    }
    
    draw() {
      projectsParticleCtx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      projectsParticleCtx.beginPath();
      projectsParticleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      projectsParticleCtx.fill();
    }
  }

  // Create particles
  const projectsParticles = [];
  for (let i = 0; i < 1500; i++) {
    projectsParticles.push(new ProjectsParticle());
  }

  // Mouse tracking
  const projectsSection = document.querySelector('.projects-page');
  if (projectsSection) {
    projectsSection.addEventListener('mousemove', (e) => {
      const rect = projectsSection.getBoundingClientRect();
      projectsMouseX = e.clientX - rect.left;
      projectsMouseY = e.clientY - rect.top;
    });
    
    projectsSection.addEventListener('mouseleave', () => {
      projectsMouseX = -1000;
      projectsMouseY = -1000;
    });
  }

  function animateProjectsParticles() {
    projectsParticleCtx.clearRect(0, 0, projectsParticleCanvas.width, projectsParticleCanvas.height);
    
    projectsParticles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    requestAnimationFrame(animateProjectsParticles);
  }
  animateProjectsParticles();
}

// Video toggle functionality
function initVideoToggle() {
  const video = document.getElementById('bayesian-video');
  const toggleButtons = document.querySelectorAll('.video-toggle-btn');
  
  if (!video) {
    console.error('Video element not found');
    return;
  }
  
  if (!toggleButtons.length) {
    console.error('Toggle buttons not found');
    return;
  }
  
  // Get video URLs from data attributes
  const imageTrajUrl = video.getAttribute('data-image-traj');
  const trajOnlyUrl = video.getAttribute('data-traj-only');
  
  console.log('=== VIDEO DEBUG INFO ===');
  console.log('Video element found:', !!video);
  console.log('Video URLs:', { imageTrajUrl, trajOnlyUrl });
  console.log('Video element visible:', video.offsetParent !== null);
  console.log('Video wrapper:', video.closest('.video-wrapper'));
  
  // Ensure initial video source is set correctly
  // Try setting the src directly first (most reliable)
  if (imageTrajUrl) {
    // Clear any existing sources first
    video.innerHTML = '';
    
    // Create and add source element
    const source = document.createElement('source');
    source.src = imageTrajUrl;
    source.type = 'video/mp4';
    video.appendChild(source);
    
    // Also set video src directly as fallback
    video.src = imageTrajUrl;
    
    // Load the video
    video.load();
    
    console.log('Video src set to:', video.src);
    console.log('Source element src:', source.src);
    
    // Try to fetch the video to verify it exists
    fetch(imageTrajUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          console.log('Video file exists and is accessible');
          console.log('Content-Type:', response.headers.get('content-type'));
          console.log('Content-Length:', response.headers.get('content-length'));
        } else {
          console.error('Video file not accessible. Status:', response.status, response.statusText);
        }
      })
      .catch(error => {
        console.error('Error checking video file:', error);
      });
  } else {
    console.error('imageTrajUrl is empty or null!');
  }
  
  // Add comprehensive error handling
  const errorMessageDiv = document.getElementById('video-error-message');
  
  video.addEventListener('error', function(e) {
    console.error('=== VIDEO ERROR ===');
    console.error('Video error event:', e);
    if (video.error) {
      console.error('Video error code:', video.error.code);
      console.error('Video error message:', video.error.message);
      // Error codes: 1=MEDIA_ERR_ABORTED, 2=MEDIA_ERR_NETWORK, 3=MEDIA_ERR_DECODE, 4=MEDIA_ERR_SRC_NOT_SUPPORTED
      const errorMessages = {
        1: 'Video loading aborted',
        2: 'Network error while loading video',
        3: 'Video decoding error',
        4: 'Video source not supported - codec issue'
      };
      console.error('Error meaning:', errorMessages[video.error.code] || 'Unknown error');
      
      // Show error message to user
      if (errorMessageDiv) {
        errorMessageDiv.style.display = 'block';
      }
      
      // If error code 4 (unsupported), try alternative loading methods
      if (video.error.code === 4) {
        console.log('Attempting to reload video with different method...');
        // Try removing all sources and re-adding
        video.innerHTML = '';
        const newSource = document.createElement('source');
        newSource.src = imageTrajUrl;
        newSource.type = 'video/mp4';
        video.appendChild(newSource);
        video.removeAttribute('src');
        video.load();
        
        // Also try direct src assignment after a delay
        setTimeout(function() {
          if (video.error && video.error.code === 4) {
            console.log('Trying direct src assignment...');
            video.src = imageTrajUrl;
            video.load();
          }
        }, 500);
      }
    }
    console.error('Current video src:', video.src);
    console.error('Current source src:', video.querySelector('source') ? video.querySelector('source').src : 'no source element');
    console.error('Video element:', video);
  });
  
  video.addEventListener('loadstart', function() {
    console.log('Video load started');
  });
  
  video.addEventListener('progress', function() {
    if (video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const duration = video.duration;
      if (duration > 0) {
        const percentLoaded = (bufferedEnd / duration) * 100;
        console.log('Video loading progress:', percentLoaded.toFixed(1) + '%');
      }
    }
  });
  
  video.addEventListener('loadedmetadata', function() {
    console.log('Video metadata loaded');
    console.log('Video duration:', video.duration, 'seconds');
    console.log('Video dimensions:', video.videoWidth + 'x' + video.videoHeight);
  });
  
  video.addEventListener('loadeddata', function() {
    console.log('Video data loaded');
  });
  
  video.addEventListener('canplay', function() {
    console.log('Video can play');
  });
  
  video.addEventListener('canplaythrough', function() {
    console.log('Video can play through (fully loaded)');
    // Hide error message if video loads successfully
    if (errorMessageDiv) {
      errorMessageDiv.style.display = 'none';
    }
  });
  
  video.addEventListener('playing', function() {
    console.log('Video is now playing');
    // Hide error message if video plays successfully
    if (errorMessageDiv) {
      errorMessageDiv.style.display = 'none';
    }
  });
  
  // Check if video is actually visible and has dimensions
  setTimeout(function() {
    const rect = video.getBoundingClientRect();
    console.log('Video element dimensions:', rect.width + 'x' + rect.height);
    console.log('Video element display:', window.getComputedStyle(video).display);
    console.log('Video element visibility:', window.getComputedStyle(video).visibility);
    console.log('Video element opacity:', window.getComputedStyle(video).opacity);
    if (rect.width === 0 || rect.height === 0) {
      console.warn('Video element has zero dimensions! This might be why it\'s not visible.');
    }
  }, 1000);
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const videoType = this.getAttribute('data-video');
      
      // Pause current video if playing
      video.pause();
      
      // Update active button
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Switch video source
      let source = video.querySelector('source');
      if (!source) {
        source = document.createElement('source');
        source.type = 'video/mp4';
        video.appendChild(source);
      }
      
      const newUrl = videoType === 'image-traj' ? imageTrajUrl : trajOnlyUrl;
      source.src = newUrl;
      video.src = newUrl; // Also set directly as fallback
      
      console.log('Switching to:', videoType, newUrl);
      
      // Reload video and reset to start
      video.load();
      video.addEventListener('loadedmetadata', function() {
        // Reset video to the beginning
        video.currentTime = 0;
        console.log('Video reset to start');
      }, { once: true });
    });
  });
}

// Expandable project cards functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles
  initProjectsParticles();
  
  // Initialize video toggle
  initVideoToggle();
  
  // Initialize expand buttons
  const expandButtons = document.querySelectorAll('.expand-button');
  
  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.project-card-expandable');
      const details = card.querySelector('.project-details');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        // Collapse
        details.style.display = 'none';
        this.setAttribute('aria-expanded', 'false');
        this.querySelector('.expand-text').style.display = 'inline';
        this.querySelector('.collapse-text').style.display = 'none';
        this.querySelector('.expand-icon').textContent = '▼';
      } else {
        // Expand
        details.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
        this.querySelector('.expand-text').style.display = 'none';
        this.querySelector('.collapse-text').style.display = 'inline';
        this.querySelector('.expand-icon').textContent = '▲';
      }
    });
  });
});
</script>
