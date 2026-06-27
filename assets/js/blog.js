(function() {
  'use strict';

  var TOOLBOX_TOOLS = [
    { id: 'numerical', spine: 'Num. Analysis', label: 'Numerical Analysis', body: 'How do we solve mathematical problems when an exact solution doesn\'t exist? Numerical analysis provides the techniques used to approximate solutions to differential equations, integrals, optimization problems, and countless other mathematical models.' },
    { id: 'optimization', spine: 'Optimization', label: 'Optimization Theory', body: 'How do we find the best solution among millions of possibilities? Optimization appears everywhere from aircraft design and robotics to machine learning and resource allocation.' },
    { id: 'linalg', spine: 'Linear Algebra', label: 'Matrix Decompositions & Linear Algebra', body: 'Many engineering and scientific problems eventually become systems of equations. Linear algebra provides the language for working with those systems, while matrix decompositions provide efficient ways to solve them.' },
    { id: 'scicomp', spine: 'Sci Comp.', label: 'Scientific Computation', body: 'How do we turn mathematical ideas into something a computer can actually solve? Scientific computation focuses on transforming mathematical models into algorithms that can be executed on a computer.' },
    { id: 'hpc', spine: 'HPC', label: 'High Performance Computing (HPC)', body: 'Some simulations are simply too large for a normal computer. HPC allows computational engineers to leverage thousands of processors simultaneously to solve problems at scales that would otherwise be impossible.' },
    { id: 'control', spine: 'Controls', label: 'Control Theory', body: 'How can we design systems that behave the way we want them to? Control theory plays a central role in robotics, aerospace systems, autonomous vehicles, and countless other engineering applications.' },
    { id: 'ml', spine: 'ML & NN', label: 'Machine Learning & Neural Networks', body: 'While traditional modeling starts with known physical laws, machine learning allows us to build models directly from data. These techniques are becoming increasingly important across nearly every area of computational science and engineering.' },
    {
      id: 'fdm',
      spine: 'FDM',
      label: 'Finite Difference Methods (FDM)',
      body: 'One of the simplest ways to solve differential equations numerically. Finite difference methods approximate derivatives using nearby points on a grid, transforming continuous equations into algebraic equations that computers can solve.'
    },
    {
      id: 'fvm',
      spine: 'FVM',
      label: 'Finite Volume Methods (FVM)',
      body: 'Rather than approximating derivatives directly, finite volume methods enforce conservation laws over small control volumes. This approach is widely used in computational fluid dynamics because it naturally preserves quantities such as mass, momentum, and energy.'
    },
    {
      id: 'fem',
      spine: 'FEM',
      label: 'Finite Element Methods (FEM)',
      body: 'Finite element methods divide complex geometries into smaller elements and approximate the solution using local basis functions. FEM is one of the most powerful and versatile tools in computational engineering, especially for structural mechanics, heat transfer, and multiphysics simulations.'
    },
    {
      id: 'pde',
      spine: 'PDEs',
      label: 'Partial Differential Equations (PDEs)',
      body: 'Many physical systems are governed by relationships involving change across both space and time. PDEs provide the mathematical framework used to describe fluid flow, heat transfer, electromagnetics, structural mechanics, and countless other engineering phenomena.'
    }
  ];

  var WORKFLOW_STEPS = [
    { id: 'model', step: '1', label: 'Build models', short: 'Build physics-based models of real-world systems', body: 'You start by translating a physical system into a model governed by conservation laws, constitutive relationships, and engineering assumptions e.g. airflow over a wing, heat in a battery, or forces on a bridge.' },
    { id: 'analyze', step: '2', label: 'Analyze mathematically', short: 'Analyze those models using mathematics', body: 'The model becomes equations: ODEs, PDEs, linear systems, optimization problems. Mathematics tells you what is solvable, what is stable, and what behavior to expect before you write a single line of code.' },
    { id: 'numerical', step: '3', label: 'Develop numerical methods', short: 'Develop numerical methods to solve them', body: 'Exact solutions are rare. You learn discretization, meshing, iterative solvers, and stability analysis turning continuous mathematics into algorithms a computer can run.' },
    { id: 'implement', step: '4', label: 'Implement in software', short: 'Implement those methods in software', body: 'You write efficient, correct code often in Python, MATLAB, or C++ and scale simulations with parallel computing when problems grow large.' },
    { id: 'interpret', step: '5', label: 'Interpret results', short: 'Interpret and visualize the results', body: 'You validate against theory or experiment, visualize fields and trajectories, and extract the prediction or design insight that answers the original engineering question.' }
  ];

  var CROSSWORD_FIELDS = [
    { id: 'math', name: 'Computational Mathematics', body: 'Developing numerical methods, algorithms, and mathematical techniques for solving complex scientific and engineering problems.' },
    { id: 'aerospace', name: 'Computational Aerospace', body: 'Simulating airflow, propulsion systems, orbital mechanics, and aircraft performance.' },
    { id: 'biology', name: 'Computational Biology', body: 'Modeling biological systems ranging from cellular processes and disease spread to genetics and drug discovery.' },
    { id: 'chemistry', name: 'Computational Chemistry', body: 'Simulating molecular interactions and chemical reactions that are difficult or expensive to study experimentally.' },
    { id: 'physics', name: 'Computational Physics', body: 'Using large-scale simulations to study physical phenomena ranging from particle interactions to astrophysical systems.' },
    { id: 'cfd', name: 'Computational Fluid Dynamics (CFD)', body: 'Modeling the behavior of fluids in applications such as aerospace, automotive engineering, weather prediction, and energy systems.' },
    { id: 'structures', name: 'Computational Structural Mechanics', body: 'Simulating stresses, deformation, vibration, and failure in engineered structures.' },
    { id: 'robotics', name: 'Computational Robotics', body: 'Combining simulation, control theory, optimization, and machine learning to develop intelligent robotic systems.' },
    { id: 'finance', name: 'Computational Finance', body: 'Applying mathematical modeling, optimization, probability, and simulation techniques to financial markets and risk analysis.' },
    { id: 'medicine', name: 'Computational Medicine', body: 'Using simulation, machine learning, and data-driven models to improve diagnosis, treatment planning, and patient outcomes.' },
    { id: 'energy', name: 'Computational Energy Systems', body: 'Modeling power grids, renewable energy systems, batteries, and energy optimization problems.' },
    { id: 'materials', name: 'Computational Materials Science', body: 'Studying and predicting material behavior before physical prototypes are ever manufactured.' },
    { id: 'datasci', name: 'Computational Data Science & AI', body: 'Applying machine learning, optimization, and large-scale computation to extract insights from complex datasets.' }
  ];

  var CROSSWORD_ENTRIES = [
    { id: 'math', word: 'MATHEMATICS', row: 6, col: 4, dir: 'across' },
    { id: 'aerospace', word: 'AEROSPACE', row: 2, col: 14, dir: 'down' },
    { id: 'chemistry', word: 'CHEMISTRY', row: 5, col: 7, dir: 'down' },
    { id: 'physics', word: 'PHYSICS', row: 7, col: 14, dir: 'across' },
    { id: 'cfd', word: 'CFD', row: 3, col: 4, dir: 'across' },
    { id: 'biology', word: 'BIOLOGY', row: 5, col: 12, dir: 'down' },
    { id: 'robotics', word: 'ROBOTICS', row: 0, col: 20, dir: 'down' },
    { id: 'structures', word: 'STRUCTURES', row: 12, col: 0, dir: 'across' },
    { id: 'finance', word: 'FINANCE', row: 3, col: 5, dir: 'down' },
    { id: 'medicine', word: 'MEDICINE', row: 4, col: 18, dir: 'down' },
    { id: 'materials', word: 'MATERIALS', row: 9, col: 2, dir: 'across' },
    { id: 'energy', word: 'ENERGY', row: 0, col: 17, dir: 'across' },
    { id: 'datasci', word: 'DATA', row: 3, col: 10, dir: 'down' }
  ];

  var CROSSWORD_COLS = 23;
  var CROSSWORD_ROWS = 14;

  function initAccordions() {
    document.querySelectorAll('.COE-accordion').forEach(function(acc) {
      var trigger = acc.querySelector('.COE-accordion-trigger');
      var panel = acc.querySelector('.COE-accordion-panel');
      if (!trigger || !panel) return;

      trigger.addEventListener('click', function() {
        var open = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', open ? 'false' : 'true');
        panel.hidden = open;
        acc.classList.toggle('open', !open);
      });
    });
  }

  function initTabs() {
    document.querySelectorAll('.COE-tab-group').forEach(function(group) {
      if (group.id === 'COE-wing-tabs') return;

      var buttons = group.querySelectorAll('.COE-tab-btn');
      var panels = group.querySelectorAll('.COE-tab-panel');

      buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var tab = btn.getAttribute('data-tab');
          buttons.forEach(function(b) {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          panels.forEach(function(p) {
            var match = p.getAttribute('data-panel') === tab;
            p.classList.toggle('active', match);
            p.hidden = !match;
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        });
      });
    });
  }

  function initWingTabs() {
    var group = document.getElementById('COE-wing-tabs');
    if (!group) return;

    var img = group.querySelector('.COE-wing-img');
    var buttons = group.querySelectorAll('.COE-tab-btn');
    var panels = group.querySelectorAll('.COE-tab-panel');
    var defaultSrc = group.getAttribute('data-img-default');
    var imgMap = {
      physics: group.getAttribute('data-img-physics'),
      math: group.getAttribute('data-img-math'),
      computation: group.getAttribute('data-img-computation')
    };
    var activeTab = null;

    function showOverview() {
      activeTab = null;
      if (img && defaultSrc) {
        img.src = defaultSrc;
        img.alt = 'Computational simulation of airflow over a wing';
      }
      buttons.forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function(p) {
        var isOverview = p.getAttribute('data-panel') === 'overview';
        p.classList.toggle('active', isOverview);
        p.hidden = !isOverview;
      });
    }

    function showTab(tab) {
      activeTab = tab;
      if (img && imgMap[tab]) img.src = imgMap[tab];
      if (img) {
        if (tab === 'physics') img.alt = 'Physics view of airflow over a wing';
        else if (tab === 'math') img.alt = 'Mathematical model of airflow over a wing';
        else if (tab === 'computation') img.alt = 'Computational simulation of airflow over a wing';
      }
      buttons.forEach(function(b) {
        var match = b.getAttribute('data-tab') === tab;
        b.classList.toggle('active', match);
        b.setAttribute('aria-selected', match ? 'true' : 'false');
      });
      panels.forEach(function(p) {
        var match = p.getAttribute('data-panel') === tab;
        p.classList.toggle('active', match);
        p.hidden = !match;
      });
    }

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = btn.getAttribute('data-tab');
        if (activeTab === tab) {
          showOverview();
        } else {
          showTab(tab);
        }
      });
    });

    showOverview();
  }

  var BOOK_SPINE_COLORS = [
    '#d4847a', '#a898c4', '#88a8c8', '#94b888', '#c8a878',
    '#c094a8', '#88b8b8', '#c89090', '#9898c0', '#b8a878', '#88b0b0'
  ];

  function spineTitleSizeClass(text) {
    var len = text.length;
    if (len > 14) return 'COE-book-title--xlong';
    if (len > 10) return 'COE-book-title--long';
    if (len > 6) return 'COE-book-title--medium';
    return '';
  }

  function initToolbox() {
    var toolbox = document.getElementById('COE-toolbox');
    if (!toolbox) return;

    var shelf = toolbox.querySelector('.COE-bookshelf-books');
    var detail = document.getElementById('COE-toolbox-detail');
    if (!shelf || !detail) return;

    var activeBook = null;

    function showTool(tool, btn) {
      shelf.querySelectorAll('.COE-book').forEach(function(b) { b.classList.remove('active'); });
      if (activeBook === tool.id) {
        activeBook = null;
        detail.innerHTML = '<h4>Select a book</h4><p>Each volume covers a core concept in the Computational Engineering toolbelt.</p>';
        return;
      }
      activeBook = tool.id;
      if (btn) btn.classList.add('active');
      detail.innerHTML = '<h4>' + tool.label + '</h4><p>' + tool.body + '</p>';
    }

    TOOLBOX_TOOLS.forEach(function(tool, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'COE-book';
      btn.setAttribute('data-tool', tool.id);
      btn.setAttribute('role', 'listitem');
      btn.setAttribute('aria-label', tool.label);
      btn.style.setProperty('--book-color', BOOK_SPINE_COLORS[i % BOOK_SPINE_COLORS.length]);
      btn.style.setProperty('--book-height', (96 + (i % 5) * 10) + 'px');
      btn.style.setProperty('--book-tilt', (((i % 7) - 3) * 0.45) + 'deg');

      var spine = document.createElement('span');
      spine.className = 'COE-book-spine';

      var spineText = tool.spine || tool.label;
      var title = document.createElement('span');
      title.className = 'COE-book-title ' + spineTitleSizeClass(spineText);
      title.textContent = spineText;

      spine.appendChild(title);
      btn.appendChild(spine);

      btn.addEventListener('click', function() { showTool(tool, btn); });
      btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showTool(tool, btn);
        }
      });

      shelf.appendChild(btn);
    });

    centerBookshelfRow(toolbox);
  }

  function centerBookshelfRow(toolbox) {
    var row = toolbox.querySelector('.COE-bookshelf-row');
    var books = toolbox.querySelector('.COE-bookshelf-books');
    if (!row || !books) return;

    function scrollToBooks() {
      if (row.scrollWidth <= row.clientWidth) {
        row.scrollLeft = 0;
        return;
      }
      var target = books.offsetLeft - (row.clientWidth - books.offsetWidth) / 2;
      row.scrollLeft = Math.max(0, Math.min(target, row.scrollWidth - row.clientWidth));
    }

    scrollToBooks();
    requestAnimationFrame(scrollToBooks);
    window.addEventListener('resize', scrollToBooks);
  }

  function initCourseMap() {
    var map = document.getElementById('COE-course-map');
    if (!map) return;

    var filters = map.querySelectorAll('.COE-course-filter');
    var cols = map.querySelectorAll('.COE-course-col');

    filters.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = btn.getAttribute('data-filter');
        filters.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        cols.forEach(function(col) {
          var cat = col.getAttribute('data-category');
          var show = filter === 'all' || cat === filter;
          col.classList.toggle('COE-course-col--dim', !show);
          col.classList.toggle('COE-course-col--highlight', show && filter !== 'all');
        });
      });
    });
  }

  function getCrosswordField(id) {
    for (var i = 0; i < CROSSWORD_FIELDS.length; i++) {
      if (CROSSWORD_FIELDS[i].id === id) return CROSSWORD_FIELDS[i];
    }
    return null;
  }

  function buildCrosswordGrid() {
    var grid = [];
    var r;
    var c;
    for (r = 0; r < CROSSWORD_ROWS; r++) {
      grid[r] = [];
      for (c = 0; c < CROSSWORD_COLS; c++) {
        grid[r][c] = null;
      }
    }

    CROSSWORD_ENTRIES.forEach(function(entry, index) {
      var word = entry.word;
      var i;
      for (i = 0; i < word.length; i++) {
        r = entry.dir === 'down' ? entry.row + i : entry.row;
        c = entry.dir === 'across' ? entry.col + i : entry.col;
        if (r < 0 || r >= CROSSWORD_ROWS || c < 0 || c >= CROSSWORD_COLS) continue;
        if (!grid[r][c]) {
          grid[r][c] = { letter: word[i], fieldIds: [entry.id], clues: [] };
        } else {
          grid[r][c].letter = word[i];
          if (grid[r][c].fieldIds.indexOf(entry.id) === -1) {
            grid[r][c].fieldIds.push(entry.id);
          }
        }
        if (i === 0 && grid[r][c].clues.indexOf(index + 1) === -1) {
          grid[r][c].clues.push(index + 1);
        }
      }
    });

    return grid;
  }

  function initCrossword() {
    var container = document.getElementById('COE-crossword');
    var readout = document.getElementById('COE-crossword-readout');
    if (!container || !readout) return;

    var readoutTitle = readout.querySelector('h4');
    var readoutBody = readout.querySelector('p');
    if (!readoutTitle || !readoutBody) {
      readout.innerHTML = '<h4>Pick a field</h4><p>Click a word in the grid to explore each specialization.</p>';
      readoutTitle = readout.querySelector('h4');
      readoutBody = readout.querySelector('p');
    }

    var grid = buildCrosswordGrid();
    container.style.setProperty('--coe-cross-cols', String(CROSSWORD_COLS));
    container.innerHTML = '';

    var lockedFieldId = null;

    function showField(fieldId) {
      var field = getCrosswordField(fieldId);
      if (!field) return;
      container.querySelectorAll('.COE-cross-cell').forEach(function(cell) {
        var ids = (cell.getAttribute('data-fields') || '').split(',');
        cell.classList.toggle('active', ids.indexOf(fieldId) !== -1);
      });
      readoutTitle.textContent = field.name;
      readoutBody.textContent = field.body;
      readout.scrollTop = 0;
    }

    function clearField() {
      container.querySelectorAll('.COE-cross-cell').forEach(function(cell) {
        cell.classList.remove('active');
      });
      readoutTitle.textContent = 'Pick a field';
      readoutBody.textContent = 'Click a word in the grid to explore each specialization.';
      readout.scrollTop = 0;
    }

    function toggleLock(fieldId) {
      if (lockedFieldId === fieldId) {
        lockedFieldId = null;
        clearField();
        return;
      }
      lockedFieldId = fieldId;
      showField(fieldId);
    }

    var r;
    var c;
    for (r = 0; r < CROSSWORD_ROWS; r++) {
      for (c = 0; c < CROSSWORD_COLS; c++) {
        var cell = grid[r][c];
        if (!cell) {
          var block = document.createElement('div');
          block.className = 'COE-cross-block';
          block.setAttribute('aria-hidden', 'true');
          container.appendChild(block);
          continue;
        }

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'COE-cross-cell';
        btn.setAttribute('data-fields', cell.fieldIds.join(','));
        btn.setAttribute('aria-label', cell.fieldIds.map(function(id) {
          var f = getCrosswordField(id);
          return f ? f.name : id;
        }).join(', '));

        if (cell.clues && cell.clues.length) {
          var num = document.createElement('span');
          num.className = 'COE-cross-num';
          num.setAttribute('aria-hidden', 'true');
          num.textContent = cell.clues.join('');
          btn.appendChild(num);
        }

        var letter = document.createElement('span');
        letter.className = 'COE-cross-letter';
        letter.textContent = cell.letter;
        btn.appendChild(letter);

        btn.addEventListener('mouseenter', function() {
          if (lockedFieldId) return;
          showField(this.getAttribute('data-fields').split(',')[0]);
        });
        btn.addEventListener('click', function() {
          toggleLock(this.getAttribute('data-fields').split(',')[0]);
        });
        btn.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleLock(this.getAttribute('data-fields').split(',')[0]);
          }
        });

        container.appendChild(btn);
      }
    }

    container.addEventListener('mouseleave', function() {
      if (!lockedFieldId) clearField();
    });
  }

  function initWorkflow() {
    var container = document.getElementById('COE-workflow');
    if (!container) return;

    var stepsEl = container.querySelector('.COE-workflow-steps');
    var detail = document.getElementById('COE-workflow-detail');
    if (!stepsEl || !detail) return;

    function showStep(step, btn) {
      stepsEl.querySelectorAll('.COE-workflow-step').forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      if (btn) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      }
      detail.innerHTML = '<h4>Step ' + step.step + ': ' + step.label + '</h4><p class="COE-workflow-short">' + step.short + '</p><p>' + step.body + '</p>';
    }

    WORKFLOW_STEPS.forEach(function(step, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'COE-workflow-step';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      if (i === 0) btn.classList.add('active');
      btn.innerHTML = '<span class="COE-workflow-num">' + step.step + '</span><span class="COE-workflow-label">' + step.short + '</span>';
      btn.addEventListener('click', function() { showStep(step, btn); });
      stepsEl.appendChild(btn);
    });

    showStep(WORKFLOW_STEPS[0], stepsEl.querySelector('.COE-workflow-step'));
  }

  function initImageLightbox() {
    var page = document.querySelector('.blog-post-page');
    if (!page) return;

    var images = page.querySelectorAll('.blog-post-content img');
    if (!images.length) return;

    var lightbox = document.createElement('div');
    lightbox.className = 'blog-lightbox';
    lightbox.id = 'blog-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged image');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.hidden = true;

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'blog-lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';

    var lightboxImg = document.createElement('img');
    lightboxImg.className = 'blog-lightbox-img';
    lightboxImg.alt = '';

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    var lastFocus = null;

    function openLightbox(img) {
      lastFocus = document.activeElement;
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('blog-lightbox-open');
      closeBtn.focus();
    }

    function closeLightbox() {
      if (lightbox.hidden) return;
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.removeAttribute('src');
      document.body.classList.remove('blog-lightbox-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    images.forEach(function(img) {
      img.classList.add('blog-lightbox-trigger');
      img.addEventListener('click', function() {
        openLightbox(img);
      });
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        closeLightbox();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initAccordions();
    initTabs();
    initWingTabs();
    initWorkflow();
    initToolbox();
    initCourseMap();
    initCrossword();
    initImageLightbox();
  });
})();
