# 1stDoc.js

I thought JavaScript needed first-class documentation so here it is! Implemented with [sweet.js](http://sweetjs.org/) macros.

First class documentation means that the documentation is part of the language. This is not not true natively in JavaScript but it doesn't take much to add it!

## Use case

You're hacking away on campus but don't have internet because the school's internet stinks.  You're using a npm module named `Coolness` and you're like, "What was that function called?" so you pop open the console and type `Coolness.doc` and wala, you have the documentation right there in your terminal. Then you ask yourself, "Self, what was the perameters to `thatFunction`?" then you realize you can just type, `Coolness.thatFunction_doc()` and now you know everything you need to run that function!

# Example

Here's an example of it in action:
```js
/**
 * This is an example of how the first class documentation is used 
 */
function Constructor() {
   DOC this "This is a constructor";
}

a = new Constructor();

a.doc();

b = {
   DOC json "This is a json literal object",

   DOC prop fun "This is a fun function!",
   fun : function (x, y) {
      return x + y;
   },

   DOC prop CONST "This is a fun constant",
   CONST: 2
}

b.doc();
b.fun_doc();
b.CONST_doc();

// global
DOC glob jQuery "Some global documentation for $'s jQuery";
jQuery = { 
   thisIs : "untouched"
};

doc.jQuery();

console.log(jQuery);


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
[more docs here](https://github.com/mozilla/sweet.js#sharing)


# Limitations
- I just bearly made it so there's probably bugs
- Obviously you have to comiple it (I might make a pure JS version soon)
- If you use a 'doc' feild in your object it will clober it.
- Seems to choke on multi-line strings. 
