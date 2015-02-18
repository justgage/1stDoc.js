/**
 * This is an example of how the first class documentation is used 
 */
function Constructor() {
   DOC this "This is a constructor"
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
DOC glob Jquery "Some global documentation for $'s Jquery";
Jquery = { 
   thisIs : "untouched"
};

doc.Jquery();

console.log(Jquery);


var d = {};
DOC d "Tack on documentation later"

d.doc();


