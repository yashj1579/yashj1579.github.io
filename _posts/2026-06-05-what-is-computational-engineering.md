---
layout: blog-post
title: "What is Computational Engineering?"
date: 2026-5-05
permalink: /blog/what-is-computational-engineering/
excerpt: "From a UT Austin Computational Engineering alumnus"
header:
  og_image: /assets/images/blog/Computational_Engineer_Page.png
tags:
  - Computational Engineering
  - UT Austin
---

<p class="COE-subtitle">From the perspective of a Computational Engineering alumnus of The University of Texas at Austin</p>

<blockquote class="COE-quote">
  <p>We model the world as it is and simulate the world as it could be.</p>
</blockquote>

What is Computational Engineering? Throughout my time in the department, I've noticed that several students who enter the major don't fully realize what they are signing up for or just how significant the field has become. As a recent graduate of the department, I feel well positioned to share what Computational Engineering actually is. My goal in this post is to give incoming students (hopefully you) a clearer sense of the field and what makes it such a unique and exciting area to explore.

<figure class="COE-meme">
  <img src="{{ '/assets/images/blog/coe-meme.png' | relative_url }}" alt="Life of a Computational Engineer" loading="lazy">
</figure>

One of the challenges in explaining Computational Engineering is that it doesn’t sit neatly within a single well-defined category. Instead, it sits at the intersection of several established fields. It relies on mathematics like an applied mathematician, programming like a computer scientist, modeling like an engineer, and data analysis like a data scientist. This ambiguity is the main reason why I've seen recruiters, professors, and even current students struggle to understand exactly where Computational Engineering fits.

<p class="COE-definition">At its core, Computational Engineering is about building mathematical models of real-world systems and using computation to simulate how those systems behave. It is a way of turning physical intuition into something that can be tested, explored, and predicted on a computer before it is ever observed in reality.</p>

While this definition does capture the core idea of the field, it can definitely feel like it leaves a lot of open questions about what Computational Engineering actually is and what it looks like in practice. By now you most likely have some questions floating in your mind (which I hopefully will be able to address):

<ul class="COE-question-list">
  <li><a href="#what-is-coe">What <em>really</em> is Computational Engineering?</a></li>
  <li><a href="#coe-real-world">What kinds of problems does Computational Engineering prepare you to solve, and what tools will you develop?</a></li>
  <li><a href="#coe-vs-other-fields">How does Computational Engineering differ from Computer Science, Statistics and Data Science, Computer Engineering, and Software Engineering?</a></li>
  <li><a href="#before-coe">What should you know before starting a degree in Computational Engineering?</a></li>
</ul>

These are all questions I either had myself or have heard repeatedly from prospective and incoming students. They are important questions. Choosing a major is ultimately about deciding what kinds of problems you want to answer and what tools you'll have at your disposal to solve them. In my (definitely unbiased) opinion, Computational Engineering gives you a unique set of tools that allow you to ask and answer questions that would otherwise be difficult or sometimes impossible to explore. 

## What <em>really</em> is Computational Engineering? {#what-is-coe}

To answer this properly, it helps to step back from the name itself and ask what computational engineers actually do.

<blockquote class="COE-quote">
  <p>Computational Engineers translate the laws of physics into mathematics and mathematics into simulations.</p>
</blockquote>

That quote has become my go-to description of Computational Engineering. At its core, it is about taking something from the real world (fluids moving past an airfoil, forces acting on a bridge, gases diffusing through pipes) and representing it in a form that can be analyzed mathematically and simulated on a computer.

In practice, this means starting from the physics that describes how a system evolves, translating that physics into a mathematical formulation, and then developing computational methods that allow a computer to approximate and solve the resulting model.

For example, consider airflow over an aircraft wing:

<div class="blog-interactive COE-wing-tabs COE-tab-group" id="COE-wing-tabs"
  data-img-default="{{ '/assets/images/blog/airfoil.png' | relative_url }}"
  data-img-physics="{{ '/assets/images/blog/physics_airfoil.png' | relative_url }}"
  data-img-math="{{ '/assets/images/blog/math_airfoil.png' | relative_url }}"
  data-img-computation="{{ '/assets/images/blog/computation_airfoil.png' | relative_url }}">
  <div class="COE-tab-buttons" role="tablist">
    <button type="button" class="COE-tab-btn" role="tab" aria-selected="false" data-tab="physics">Physics</button>
    <button type="button" class="COE-tab-btn" role="tab" aria-selected="false" data-tab="math">Mathematics</button>
    <button type="button" class="COE-tab-btn" role="tab" aria-selected="false" data-tab="computation">Computation</button>
  </div>
  <div class="COE-wing-visual">
    <img class="COE-wing-img" src="{{ '/assets/images/blog/airfoil.png' | relative_url }}" alt="Airflow over an aircraft wing" loading="lazy">
  </div>
  <div class="COE-tab-panels">
    <div class="COE-tab-panel COE-wing-overview active" data-panel="overview" role="tabpanel">
      <p>Airflow over a wing is a classic Computational Engineering problem: one physical system understood through physics, mathematics, and computation working together. Press <strong>Physics</strong>, <strong>Mathematics</strong>, or <strong>Computation</strong> above to see how each layer changes the picture.</p>
    </div>
    <div class="COE-tab-panel" data-panel="physics" role="tabpanel" hidden>
      <p>From physics, we start with the idea that air behaves like a fluid governed by conservation laws for mass, momentum, and energy. These principles describe how velocity, pressure, and density change over space and time.</p>
    </div>
    <div class="COE-tab-panel" data-panel="math" role="tabpanel" hidden>
      <p>To make this precise, we translate those physical laws into a set of mathematical equations, often in the form of partial differential equations such as the non-dimensional Navier–Stokes equations. At this stage, the system is fully mathematical but still not something we can solve by hand in any realistic setting.  </p>
    </div>
    <div class="COE-tab-panel" data-panel="computation" role="tabpanel" hidden>
      <p>Since exact solutions are rarely possible, we develop numerical methods that approximate the equations on a grid or mesh, and implement these methods on a computer to simulate how airflow evolves around the wing under different conditions.</p>
    </div>
  </div>
</div>

This is one example of what Computational Engineering really is: turning real-world problems into mathematical models and using computation to study how those models behave. Everything in the field ultimately traces back to that same process of modeling reality and turning it into computable predictions.

## Computational Engineering in the Real World {#coe-real-world}
To me, the best way to understand Computational Engineering is through the problems it tackles. Below I've gathered a few examples of the questions Computational Engineering students at UT Austin have worked towards solving:

<div class="COE-accordion-group">

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Q1. How can engineers test an aircraft before it is ever built?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Modern aircraft undergo thousands of virtual experiments before a single prototype is manufactured. Computational engineers create numerical models that simulate airflow, structural deformation, vibration, and performance under extreme conditions.</p>
    <figure class="COE-figure">
      <img src="{{ '/assets/images/blog/xwing_cfd_analysis_pressure.png' | relative_url }}" alt="CFD pressure analysis of airflow around an X-wing. My final project for my CFD class." loading="lazy">
      <figcaption>CFD simulation from COE 347 of pressure distribution on an X-wing.</figcaption>
    </figure>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Q2. How can we predict the weather before it happens?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Weather forecasts are built on mathematical models describing fluid flow, heat transfer, atmospheric chemistry, and countless other physical processes. Computational engineers develop the algorithms and software that make these large-scale simulations possible.</p>
    <figure class="COE-figure COE-figure--sm">
      <img src="{{ '/assets/images/blog/Flood-Model-Zoomed.jpg' | relative_url }}" alt="Computational flood model showing water elevation across a coastal region" loading="lazy">
      <figcaption>
        Flood model of the Texas Rio Grande Valley. Work by <a href="https://ae.utexas.edu/news/ira-narang-wins-best-undergraduate-research-presentation-for-flood-modeling/" target="_blank" rel="noopener">Ira Narang</a>.
      </figcaption>
    </figure>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Q3. How can we design a drug before it's ever tested on a patient?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Developing new medicines traditionally requires years of expensive laboratory testing. Today, researchers use computational models to simulate molecular interactions, predict protein structures, and identify promising drug candidates before entering the lab. Computational engineers help build the algorithms and simulations that make this process possible.</p>
    <figure class="COE-figure">
      <img src="{{ '/assets/images/blog/computational_medicine.png' | relative_url }}" alt="CFD simulation of airflow in a nasal cavity for biomedical research" loading="lazy">
      <figcaption>Research on determining mechanical properties of Aortic Valve Interstitial Cells (AVICs) from cell deformation. Work by <a href="https://www.linkedin.com/in/arushi-r-sadam-553b47237/" target="_blank" rel="noopener">Arushi Sadam.</a> </figcaption>
    </figure>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Q4. How can we land a spacecraft on another planet millions of miles away?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>When a spacecraft enters the atmosphere of another planet, there is no opportunity for a second attempt. Engineers must understand aerodynamics, heat transfer, navigation, and control systems long before launch. Computational engineers develop the simulations that allow mission designers to test thousands of scenarios and prepare for conditions that cannot be recreated on Earth.</p>
    <figure class="COE-figure">
      <img src="{{ '/assets/images/blog/spacecraft_monitoring.gif' | relative_url }}" alt="Spacecraft entry monitoring simulation" loading="lazy">
      <figcaption>
        <a href="https://sites.utexas.edu/tsl/" target="_blank" rel="noopener">Texas Spacecraft Laboratory</a> SEEKER mission deployed in September 2019 for robotic free-flyer inspection of crewed space vehicles.
      </figcaption>
    </figure>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Q5. How can a self-driving car make decisions in a fraction of a second?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Autonomous vehicles must process information from cameras, radar, and other sensors while continuously predicting the behavior of the world around them. Computational engineers develop the mathematical models, optimization algorithms, and machine learning systems that help these vehicles navigate safely and reliably.</p>
    <figure class="COE-figure">
      <img src="{{ '/assets/images/blog/autonomous_driving.gif' | relative_url }}" alt="Autonomous driving perception and decision-making simulation" loading="lazy">
      <figcaption>My research on autonomous driving decision-making and planning on a realistic dataset.</figcaption>
    </figure>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Q6. How can engineers determine whether a bridge will remain safe under years of traffic, wind, and weather?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Structural systems experience complex loads that change over time, making it difficult to predict how they will respond in the real world. Computational engineers develop mathematical models and simulations that allow engineers to study stresses, deformations, vibrations, and potential failure points before a structure is ever built.</p>
    <figure class="COE-figure">
      <video class="COE-media" src="{{ '/assets/images/blog/autonomous_driving.mp4' | relative_url }}" controls playsinline loop muted>
        Your browser does not support the video tag.
      </video>
      <figcaption>Alex Choi's research on Structural Mechanics with Dr. Chad Landis.</figcaption>
    </figure>
  </div>
</div>

</div>

## The Toolbox of a Computational Engineer {#coe-toolbelt}

Just as someone might reach for a hammer, screwdriver, or measuring tape to construct a structure, Computational Engineers have their own toolbox filled with the skills they use to  build models, run simulations, and analyze complex systems that would otherwise be difficult to study directly.

Throughout the degree, you'll spend your time learning how to:

<div class="blog-interactive COE-workflow" id="COE-workflow">
  <p class="COE-workflow-hint">Click a step to see what it involves</p>
  <div class="COE-workflow-steps" role="tablist"></div>
  <div class="COE-workflow-detail" id="COE-workflow-detail">
    <h4>Your COE workflow</h4>
    <p>Select a step above to explore each stage of the modeling process.</p>
  </div>
</div>

Throughout the degree, you'll develop a collection of mathematical and computational techniques to help tackle a wide range of challenges. Below are some key terms that encapsulate the tools a Computational Engineer can call upon in order to solve a problem.

<div class="blog-interactive COE-bookshelf" id="COE-toolbox">
  <p class="COE-bookshelf-hint">Click a book on the shelf to learn more about it</p>
  <div class="COE-bookshelf-stage">
    <div class="COE-bookshelf-row">
      <div class="COE-shelf-decor COE-shelf-decor--left" aria-hidden="true">
        <img class="COE-shelf-item COE-shelf-item--med" src="{{ '/assets/images/blog/bookshelf/plant1.png' | relative_url }}" alt="">
        <img class="COE-shelf-item COE-shelf-item--med" src="{{ '/assets/images/blog/bookshelf/globe.png' | relative_url }}" alt="">
        <img class="COE-shelf-item COE-shelf-item--short" src="{{ '/assets/images/blog/bookshelf/newton_cradle.png' | relative_url }}" alt="">
        <img class="COE-shelf-item COE-shelf-item--med" src="{{ '/assets/images/blog/bookshelf/hourglass.png' | relative_url }}" alt="">
      </div>
      <div class="COE-bookshelf-books" role="list"></div>
      <div class="COE-shelf-decor COE-shelf-decor--right" aria-hidden="true">
        <img class="COE-shelf-item COE-shelf-item--tall" src="{{ '/assets/images/blog/bookshelf/spaceship.png' | relative_url }}" alt="">
        <img class="COE-shelf-item COE-shelf-item--short" src="{{ '/assets/images/blog/bookshelf/plant2.png' | relative_url }}" alt="">
        <img class="COE-shelf-item COE-shelf-item--short" src="{{ '/assets/images/blog/bookshelf/mug.png' | relative_url }}" alt="">
        <img class="COE-shelf-item COE-shelf-item--short" src="{{ '/assets/images/blog/bookshelf/pencils.png' | relative_url }}" alt="">
      </div>
    </div>
    <div class="COE-bookshelf-plank" aria-hidden="true"></div>
  </div>
  <div class="COE-bookshelf-detail" id="COE-toolbox-detail">
    <h4>Select a book</h4>
    <p>Each volume covers a core concept in the Computational Engineering toolbelt.</p>
  </div>
</div>

As you move through the Computational Engineering curriculum, you'll encounter courses that build different parts of this toolbox. While each class has its own focus, most of them contribute to one of three complementary foundations that together define the degree: 

<div class="blog-interactive COE-course-map" id="COE-course-map">
  <div class="COE-course-filters">
    <button type="button" class="COE-course-filter active" data-filter="all">All foundations</button>
    <button type="button" class="COE-course-filter" data-filter="physics">Physics</button>
    <button type="button" class="COE-course-filter" data-filter="math">Mathematics</button>
    <button type="button" class="COE-course-filter" data-filter="computational">Computational</button>
  </div>
  <div class="COE-course-columns">
    <div class="COE-course-col" data-category="physics">
      <h4>Physics-Based Courses</h4>
      <ul>
        <li>Thermodynamics</li>
        <li>Low-Speed Aerodynamics</li>
        <li>Solid Mechanics</li>
        <li>Electromechanical Systems</li>
      </ul>
      <p class="COE-course-col-desc">Understanding the physical systems we want to model and predict.</p>
    </div>
    <div class="COE-course-col" data-category="math">
      <h4>Mathematics-Based Courses</h4>
      <ul>
        <li>Advanced Calculus for Applications II</li>
        <li>Differential Equations with Linear Algebra</li>
        <li>Probability I</li>
        <li>Linear Systems Analysis</li>
      </ul>
      <p class="COE-course-col-desc">The mathematical language used to formulate and analyze engineering models.</p>
    </div>
    <div class="COE-course-col" data-category="computational">
      <h4>Computational Courses</h4>
      <ul>
        <li>Engineering Computation</li>
        <li>Scientific Computation</li>
        <li>Advanced Scientific Computation</li>
        <li>Computational Fluid Dynamics</li>
        <li>Computational Methods for Structural Analysis</li>
      </ul>
      <p class="COE-course-col-desc">Techniques to transform mathematical models into practical simulation tools.</p>
    </div>
  </div>
</div>

These are the tools that Computational Engineers use to tackle complex problems. While the specific application that you pursue may differ, these ideas appear again and again across the models, simulations, and analyses that define the field.

## The Fields of a Computational Engineer

Because the need to model, simulate, and predict appears across so many industries, the skills developed in Computational Engineering are valuable in a remarkably wide range of fields. Below are some of the areas where Computational Engineers commonly apply their knowledge.

<div class="blog-interactive COE-crossword-wrap">
  <p class="COE-crossword-hint">Click a word to explore each field</p>
  <div class="COE-crossword-layout">
    <div class="COE-crossword" id="COE-crossword" role="grid" aria-label="COE fields crossword"></div>
    <div class="COE-crossword-readout" id="COE-crossword-readout" aria-live="polite">
      <h4>Pick a field</h4>
      <p>Click a word in the grid to explore each specialization.</p>
    </div>
  </div>
</div>

While each discipline has its own theories and specialized knowledge, many of them increasingly rely on the same computational approach: build a model, simulate its behavior, and use the results to better understand the problem at hand. Hence, even though the details of the problem may change across disiplines, the need to build models and utilize simulations to gain insight stays consistent.

## What is the Difference between Computational Engineering and Other Fields? {#coe-vs-other-fields}

Unfortunately, because of how unique the field is, I've noticed that several groups, especially recruiters, aren't quite sure what we do and tend to place us into one of three categories: Computer Science, Statistics and Data Science, or Computer Engineering. Hopefully, this section serves as a useful reference when answering the question: “So how are you different from [insert field here]?”

<figure class="COE-figure">
  <img src="{{ '/assets/images/blog/field_comparison.png' | relative_url }}" alt="Comparison of Computational Engineering with Computer Science, Statistics and Data Science, Electrical and Computer Engineering, and Software Engineering" loading="lazy">
  <figcaption>How Computational Engineering relates to neighboring fields.</figcaption>
</figure>

<div class="COE-accordion-group COE-field-compare">

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Computational Engineering vs Computer Science</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>One of the biggest misconceptions is that Computational Engineering is simply Computer Science with extra math. While the two fields overlap heavily, they are fundamentally asking different questions.</p>
    <p><strong>Computer Science</strong> primarily focuses on computation itself such as algorithms, operating systems, databases, networking, programming languages, and software architecture.</p>
    <ul>
      <li>How can we make an algorithm run faster?</li>
      <li>How can we design scalable software systems?</li>
      <li>How can computers efficiently store and retrieve information?</li>
    </ul>
    <p><strong>Computational Engineering</strong> focuses on using computation to model and solve physical and scientific problems.</p>
    <ul>
      <li>How can we numerically solve a system of partial differential equations?</li>
      <li>How can we simulate airflow around an aircraft?</li>
      <li>How can we model the spread of a wildfire?</li>
    </ul>
    <p class="COE-takeaway">
      <span class="COE-takeaway-line"><strong>Computer Science</strong> builds better computers and software.</span>
      <span class="COE-takeaway-line"><strong>Computational Engineering</strong> builds mathematical models and studies them through computation.</span>
    </p>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Computational Engineering vs Statistics and Data Science</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Both fields use mathematics, programming, and large amounts of data but they often approach problems from opposite directions.</p>
    <p><strong>Statistics &amp; Data Science</strong> extract patterns and insights from data.</p>
    <ul>
      <li>What trends exist within this dataset?</li>
      <li>Can we predict future outcomes from historical observations?</li>
      <li>What can the data tell us about a system we do not fully understand?</li>
    </ul>
    <p><strong>Computational Engineering</strong> often begins with a mathematical or physical model.</p>
    <ul>
      <li>How can we model this physical system mathematically?</li>
      <li>How can we simulate its behavior under different conditions?</li>
      <li>How closely does our model match reality?</li>
    </ul>
    <p class="COE-takeaway">
      <span class="COE-takeaway-line"><strong>Statistics and Data Science</strong> learn from data.</span>
      <span class="COE-takeaway-line"><strong>Computational Engineering</strong> learns from models.</span>
    </p>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Computational Engineering vs Electrical and Computer Engineering</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Both fields appear engineering-focused and computer-based on the surface. The difference lies in the systems being studied.</p>
    <p><strong>Electrical and Computer Engineers</strong> design and understand electrical, electronic, and computing systems.</p>
    <ul>
      <li>How can we design a more efficient processor?</li>
      <li>How can we build reliable communication systems?</li>
      <li>How can we improve embedded device performance?</li>
    </ul>
    <p><strong>Computational Engineers</strong> use computation as a tool to study other systems.</p>
    <ul>
      <li>How can we simulate the behavior of a fluid?</li>
      <li>How can we model stresses inside a structure?</li>
      <li>How can we solve large-scale mathematical models efficiently?</li>
    </ul>
    <p class="COE-takeaway">
      <span class="COE-takeaway-line"><strong>Electrical and Computer Engineering</strong> is often concerned with how computation is physically built.</span>
      <span class="COE-takeaway-line"><strong>Computational Engineering</strong> focuses on what computation tells us about physical phenomena.</span>
    </p>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>Computational Engineering vs Software Engineering</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>Both involve building large-scale computational systems. The key difference: software is usually the <em>final product</em> in Software Engineering, whereas software is often a <em>tool</em> in Computational Engineering.</p>
    <p><strong>Software engineers</strong> ask:</p>
    <ul>
      <li>How can we build reliable and maintainable software?</li>
      <li>How can we design systems that scale to millions of users?</li>
      <li>How can teams efficiently develop large software systems?</li>
    </ul>
    <p><strong>Computational engineers</strong> ask:</p>
    <ul>
      <li>How can we accurately model this system?</li>
      <li>How can we solve the governing equations efficiently?</li>
      <li>How can we validate our computational results?</li>
    </ul>
    <p class="COE-takeaway">
      <span class="COE-takeaway-line"><strong>Software Engineering</strong> focuses on building software products.</span>
      <span class="COE-takeaway-line"><strong>Computational Engineering</strong> focuses on building computational models.</span>
    </p>
  </div>
</div>

</div>

At its core, Computational Engineering is about taking real physical systems, building mathematical models of them, and using computation to simulate how they behave. We spend just as much time learning how to construct those models as we do learning how to actually simulate them on a computer.

## What should you know before starting a degree in Computational Engineering? {#before-coe}

If you're someone who enjoys mathematics, physics, engineering, programming, or simply wants to understand how those subjects are used to solve real-world problems, then Computational Engineering is absolutely the field for you. One of the big reasons I was originally drawn to the field was that it allowed me to combine each discipline and learn the skills to apply them to problems that I found interesting.

<figure class="COE-figure">
  <img src="{{ '/assets/images/blog/senior_design_project.png' | relative_url }}" alt="Senior design project" loading="lazy">
  <figcaption>Our Senior Design group collecting data on the field for our CV algorithm.</figcaption>
</figure>

Looking back, one of the biggest takeaways for me was realizing that the degree is much less about learning individual topics in isolation and much more about understanding how those topics work together in the world of simulations. As a freshman, it can sometimes feel like you're collecting a random assortment of puzzle pieces: calculus, differential equations, programming, physics, linear algebra, and more. It is not always obvious how those pieces connect.

Over the multitude of courses, however, that picture becomes much clearer. Mathematics gives you a language for describing a problem. Physics and engineering provide the principles that govern how a system behaves. Computation allows you to study models that would otherwise be impossible to solve by hand. Eventually, those seemingly separate courses stop feeling like separate subjects and start feeling like different parts of the same puzzle.

That, more than anything else, is how I see Computational Engineering today. It is a field centered around modeling and simulation, built on the idea that mathematics, physics, and computation are the most powerful when used together. More personally, Computational Engineering ended up being one of the most rewarding decisions I made during college. It introduced me to incredible friends, fascinating problems, and a set of tools that changed the way I think about the world.

## Contact and Connect

If you have any questions about Computational Engineering, UT Austin, research opportunities, coursework, or anything else related to the program, feel free to reach out at <a href="mailto:yjtexas2005@gmail.com">yjtexas2005@gmail.com</a>. Also if you notice any typos or have any suggestions for this blog, please reach out. 

I would also highly recommend connecting with our incredible academic advisors, <a href="mailto:holly.bhasin@austin.utexas.edu">Holly Bhasin</a> and <a href="mailto:r.babcock@austin.utexas.edu">Renee Babcock</a>. They are great people and can help answer any questions you may still have including degree requirements, course planning, and opportunities within the department.

Finally, don't be afraid to talk to current students. One of the best ways to learn about Computational Engineering is by hearing from people who are in the program. Every student has a slightly different perspective, and those conversations can often provide insights that you won't find on a degree plan or university website.

## FAQ

<div class="COE-accordion-group COE-faq">

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>What resources are available to help me start planning my degree?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    Below are some of the resources I found most helpful when planning my degree, exploring electives, and figuring out which courses interested me.

    <ul class="COE-link-list">
      <li><a href="https://utexas.app.box.com/v/degree-plan-flow-charts" target="_blank" rel="noopener">Degree Flow Chart</a></li>
      <li><a href="https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-computational-engineering/" target="_blank" rel="noopener">Degree Requirements</a></li>
      <li><a href="https://catalog.utexas.edu/general-information/coursesatoz/coe/" target="_blank" rel="noopener">Courses Offered</a></li>
      <li><a href="https://testingservices.utexas.edu/search-undergraduate-exams" target="_blank" rel="noopener">Claim AP Credit</a></li>
      <li><a href="https://cns.utexas.edu/info-undergraduate-students/academics-advising-policies/internal-transfer/internal-transfer" target="_blank" rel="noopener">Adding a double major</a></li>
      <li><a href="https://catalog.utexas.edu/undergraduate/the-university/minor-and-certificate-programs/" target="_blank" rel="noopener">Adding a minor/certificate</a></li>
      <li><a href="https://cockrell.utexas.edu/student-life/student-organizations/" target="_blank" rel="noopener">UT Clubs</a></li>
    </ul>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>What resources are available to help me get started preparing for my courses?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>
      I'm working on creating a separate blog to organize and share resources for individual Computational Engineering courses at UT Austin, as well as general advice for undergraduates in the program. If this would be helpful to you, please send me an email. Knowing there's interest will help motivate me to continue working on these sort of stuff. 
      <br><br>
      In the meantime, I recommend checking out <a href="https://missing.csail.mit.edu/" target="_blank" rel="noopener">The Missing Semester of Your CS Education</a> for practical computing skills, and <a href="https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&si=oY1Sj96tpXy6JRn1" target="_blank" rel="noopener">3Blue1Brown's courses on Calculus and Linear Algebra</a> for intuitive math explanations.
    </p>
  </div>
</div>

<div class="COE-accordion">
  <button type="button" class="COE-accordion-trigger" aria-expanded="false">
    <span>What advice do you have to make the most of my degree?</span>
    <span class="COE-accordion-icon" aria-hidden="true">+</span>
  </button>
  <div class="COE-accordion-panel" hidden>
    <p>I'm also planning a separate blog sharing advice from my own experience in Computational Engineering, along with insights from other students in the program.</p>
    <p>If I had to leave one piece of advice for now: <strong>get involved in a technical club or research group and commit real time to it.</strong> Most of the skills that translate directly into industry or academia don't come from lectures alone, but from working through open-ended, real-world problems. UT has strong opportunities for this kind of experience, and it's where a lot of the most meaningful learning happens.</p>
  </div>
</div>

</div>
