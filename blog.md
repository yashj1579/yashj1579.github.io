---
title: "Blogs"
layout: default
permalink: /blog/
---

<link rel="stylesheet" href="{{ '/assets/css/frontpage.css' | relative_url }}">

<section class="blog-page">
  <canvas id="blog-particle-canvas" class="blog-particle-canvas" aria-hidden="true"></canvas>
  <div class="blog-page-inner">
    <h1>Blogs</h1>
    <p class="blog-page-intro">Thoughts on computational science, control, and building things that teach themselves.</p>

    <div class="blog-bubble-grid">
      {% if site.posts.size == 0 %}
        <p class="blog-empty">No posts yet - check back soon.</p>
      {% else %}
        {% for post in site.posts %}
          <a href="{{ post.url | relative_url }}" class="blog-bubble">
            <div class="blog-bubble-glow" aria-hidden="true"></div>
            <div class="blog-bubble-body">
              <time class="blog-bubble-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
              <h2 class="blog-bubble-title">{{ post.title }}</h2>
              <p class="blog-bubble-excerpt">
                {% if post.excerpt %}
                  {{ post.excerpt | strip_html | strip_newlines | truncate: 160 }}
                {% else %}
                  {{ post.content | strip_html | strip_newlines | truncate: 160 }}
                {% endif %}
              </p>
              {% if post.tags.size > 0 %}
                <div class="blog-bubble-tags">
                  {% for tag in post.tags limit: 3 %}
                    <span class="blog-tag">{{ tag }}</span>
                  {% endfor %}
                </div>
              {% endif %}
              <span class="blog-bubble-cta">Read more →</span>
            </div>
          </a>
        {% endfor %}
      {% endif %}
    </div>
  </div>
</section>

<script src="{{ '/assets/js/blog.js' | relative_url }}?v=20260618"></script>
