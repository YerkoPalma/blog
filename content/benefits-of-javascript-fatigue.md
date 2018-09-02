# The benefits of javascript fatigue

The javascript ecosystem is way too big, that’s not new. People even put a name 
for that, the [javascript fatigue][1]. But the same thing that might look like 
_the_ problem for the language is also one of its best features. IMO, the huge 
variety of options to do anything in javascript is what makes it an awesome 
language, and with npm if you don’t find a library that do what you want 
(really unlikely) you can easily publish your own! So, I really think that 
javascript fatigue is not a bad thing, is not a bug, it is a feature.

## Sympthom of freedom

Now talking about npm, there is a sentence I heard once that I’ll always 
remember.

> Npm works, because anarchy works

That awesome quote is from James Haliday ([Substack][substack]) the author of 
borwserify and hundred of other npm packages. And what I understand of that, is 
that the npm ecosystem allows you to publish and use modules freely and that 
freedom has lead to a great community and great resources. Of course there has 
been some frictions, but after some storm and chaos a really stable community 
has arise, a community based primary in freedom and cooperation, just like 
anarchy.

## Road to my own stack

So what’s the relation between javascript fatigue and npm? Well, for me the 
javascript fatigue came in form of various frameworks and npm modules, and I 
think that it has been benefical because I’m now overcoming this chaos (the 
fatigue) and I’m achieving the calm, my own stability, my own stack!

This stack is a combination of a view engine, [bel][bel], a router (I’ve made 
my own) [singleton-router][router], a state container, [redux][redux], and a 
css modular framework, [tachyons][tachyons]. For the backend, I use 
[merry][merry] for streaming routes, [level][level] and friends for the 
database, [json-schema][jsonschema] for the model definitions. I’m not going to 
specify details, but you can find the [source][2] on github if you want to.

But please don’t misunderstand, I’m not building _yet another_ framework, I just 
want to show how to wire up a bunch of libraries to make a _framework-like_
stack. **I don’t want to encourage you to use my framework, I want to encourage** 
**you to build your own**. Don’t be afraid of low level libraries or even vanilla 
javascript, they are your friends.

[1]: https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4
[2]: https://github.com/YerkoPalma/full-stack
[bel]: https://github.com/choojs/nanohtml
[router]: https://github.com/YerkoPalma/singleton-router
[redux]: https://github.com/reduxjs/redux
[tachyons]: https://github.com/tachyons-css/tachyons
[merry]: https://github.com/shipharbor/merry
[level]: https://github.com/Level/level
[jsonschema]: http://json-schema.org/
[substack]: https://github.com/substack