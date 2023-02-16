---
layout: home
eleventyNavigation:
  key: Blog
  order: 2
---

# Posts

{% set postlist = collections.posts %}
{% include "postlist.njk" %}

