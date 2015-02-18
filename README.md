# 1stDoc.js

I thought JavaScript needed first-class documentation so here it is! Implemented with [sweet.js](http://sweetjs.org/) macros.

# Example

Here's an example of it in action:
```
/**
 * This is an example of how the first class documentation is used 
 */

// This is for anything that uses "this"
function Constructor() {
   DOC this "This is a constructor"
}

a = new Constructor();

a.doc();

// for JSON literals
b = {
   DOC json "This is a json literal object"
}

b.doc();

// global document object
// Note how this doesn't touch the real object
DOC glob Jquery "Some global documentation for $'s Jquery";
Jquery = { 
   thisIs : "untouched"
};

doc.Jquery();

console.log(Jquery);


var d = {};
DOC d "Tack on documentation later"

d.doc();

```

# How to use

You first have to install sweet.js globaly, eg: 
```
$ npm install -g sweet.js
```

then you can use it as a module like so:
```
sjs -m ./place/where/DOC.js yourCodeWith1stClassDocs.js
```
(more docs here)[https://github.com/mozilla/sweet.js#sharing]


# Limitations
- I just bearly made it so there's probably bugs
- Obviously you have to comiple it (I might make a pure JS version soon)
- If you use a 'doc' feild in your object it will clober it.
