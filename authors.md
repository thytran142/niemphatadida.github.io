---
layout: default
title: Các bậc minh sư
---
<h1>Các bậc minh sư</h1>

<ul>
  {% for author in site.authors %}
    <li>
      <h2>{{ author.name }}</h2>
      <p>{{ author.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>