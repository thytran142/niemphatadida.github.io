---
layout: default
title: Các bậc minh sư
---
<h1>Các bậc minh sư</h1>

<ul>
  {% for post in site.hoathuongtuyenhoa %}
    <li><a href="{{ post.url }}">{{ post.date | date: "%B %Y" }} - {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>