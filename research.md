---
title: "Research"
layout: single
sidebar:
  nav: "research"
---

# Research

I am a graduate researcher in **computational engineering and mathematics** at the University of Texas at Austin.  
My work focuses on **optimization, game theory, control, and autonomous systems**, with an emphasis on computational methods and multi-agent systems.

---

## Areas of Interest


## Areas of Interest

<div class="flex flex-wrap -mx-4">

<div class="w-full md:w-1/3 px-4 mb-6">
  <div class="card p-4 h-full">
    <img src="/assets/images/multi-agent.png" alt="Multi-agent simulation" style="border-radius:8px; max-width:100%;">
    <h3>Multi-Agent Dynamic Games</h3>
    <p>Analysis and simulation of multi-agent systems using complementarity-based solvers and intent inference frameworks.</p>
  </div>
</div>

<div class="w-full md:w-1/3 px-4 mb-6">
  <div class="card p-4 h-full">
    <img src="/assets/images/solver-diagram.png" alt="Solver diagram" style="border-radius:8px; max-width:100%;">
    <h3>Numerical Optimization and Solvers</h3>
    <p>Development and implementation of numerical solvers for PDEs, dynamic games, and high-dimensional optimization problems.</p>
  </div>
</div>

<div class="w-full md:w-1/3 px-4 mb-6">
  <div class="card p-4 h-full">
    <img src="/assets/images/autonomous-car.png" alt="Autonomous car" style="border-radius:8px; max-width:100%;">
    <h3>Autonomous Systems and Control</h3>
    <p>Real-time estimation, motion prediction, and control of autonomous vehicles and robotics using simulation frameworks like CARLA.</p>
  </div>
</div>

</div>


---

## Selected Projects and Publications

<div class="cards">

{% for project in site.data.projects %}
  <div class="card">
    {% if project.image %}
    <img src="{{ project.image }}" alt="{{ project.title }}" style="max-width:100%; border-radius: 8px;">
    {% endif %}
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    {% if project.link %}
    <a class="btn" href="{{ project.link }}">View Project</a>
    {% endif %}
  </div>
{% endfor %}

</div>

> Detailed projects and code are available on the [Projects page](/projects/).

---

## Contact

For research inquiries or collaboration, please use the **email link in the sidebar** or refer to my [CV](/assets/pdf/Yash_Jain_CV.pdf) for more information.

