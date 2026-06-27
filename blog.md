---
title: "Blogs"
layout: default
permalink: /blog/
---

<link rel="stylesheet" href="{{ '/assets/css/frontpage.css' | relative_url }}">

<section class="blog-page">
  <div class="blog-page-inner">
    <h1>Yash Jain Blogs</h1>
    <p class="blog-page-intro">Thoughts on computational engineering, control, machine learning, and building things that teach themselves.</p>

    <div class="blog-list">
      {% if site.posts.size == 0 %}
        <p class="blog-empty">No posts yet - check back soon.</p>
      {% else %}
        {% for post in site.posts %}
          <article class="blog-list-item">
            <a href="{{ post.url | relative_url }}" class="blog-list-link">
              <div class="blog-list-main">
                <time class="blog-list-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                <h2 class="blog-list-title">{{ post.title }}</h2>
                <p class="blog-list-excerpt">
                  {% if post.excerpt %}
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 220 }}
                  {% else %}
                    {{ post.content | strip_html | strip_newlines | truncate: 220 }}
                  {% endif %}
                </p>
              </div>
              <span class="blog-list-arrow" aria-hidden="true">→</span>
            </a>
          </article>
        {% endfor %}
      {% endif %}
    </div>
  </div>
</section>

<script src="{{ '/assets/js/blog.js' | relative_url }}?v=20260703"></script>
