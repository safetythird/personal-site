---
layout: home
eleventyNavigation:
  key: Home
  order: 1
---
# Welcome
Congratulations, you've found the homepage of Ben Greenberg. That's a big fucking deal, my friend. You're about to 10x your life.

# About me
Devoted husband and catfather. Engineering leader. Made out of meat.

# Latest post

{% set postlist = collections.posts | head(-1) %}
{% include "postlist.njk" %}

