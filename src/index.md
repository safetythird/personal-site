---
layout: home
---
# Welcome
Congratulations, you've found the homepage of Ben Greenberg. That's a big fucking deal, my friend. You're about to 10x your life.

# About me
Devoted husband and catfather. Engineering leader. Made out of meat.

# Posts

{%- for post in collections.posts %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
