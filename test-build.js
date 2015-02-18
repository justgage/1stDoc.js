function Constructor$688() {
    this.doc = function () {
        console.log('This is a constructor');
    };
}
a = new Constructor$688();
a.doc();
b = {
    doc: function () {
        console.log('This is a json literal object');
    },
    'fun_doc': function () {
        console.log('This is a fun function!');
    },
    fun: function (x$699, y$700) {
        return x$699 + y$700;
    },
    'CONST_doc': function () {
        console.log('This is a fun constant');
    },
    CONST: 2
};
b.doc();
b.fun_doc();
b.CONST_doc();
var // global
g$690 = GLOBAL || document;
g$690.doc = g$690.doc || {};
g$690.doc.Jquery = function () {
    console.log('Some global documentation for $\'s Jquery');
};
Jquery = { thisIs: 'untouched' };
doc.Jquery();
console.log(Jquery);
var d$691 = {};
d$691.doc = function () {
    console.log('Tack on documentation later');
};
d$691.doc();