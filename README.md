# 1stDoc.js

I thought JavaScript needed first-class documentation so here it is! Implemented with [sweet.js](http://sweetjs.org/) macros.

First class documentation means that the documentation is part of the language. This is not not true natively in JavaScript but it doesn't take much to add it!

## Use case

You're hacking away on campus but don't have internet because the school's internet stinks.  You're using a npm module named `Coolness` and you're like, "What was that function called?" so you pop open the console and type `Coolness.doc` and wala, you have the documentation right there in your terminal. Then you ask yourself, "Self, what was the perameters to `thatFunction`?" then you realize you can just type, `Coolness.thatFunction_doc()` and now you know everything you need to run that function!

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

a.doc(); // console.logs "This is a constructor"

// for JSON literals
b = {
   DOC json "This is a json literal object"
}

b.doc(); // console.logs "This is a json literal object"

// global document object
// Note how this doesn't touch the real object
DOC glob Jquery "Some global documentation for $'s Jquery";
Jquery = { 
   thisIs : "untouched"
};

doc.Jquery(); // Yep, you guessed it.

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
- Seems to choke on multi-line strings. 
