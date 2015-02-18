function Constructor$656() {
    this.doc = function () {
        console.log('This is a constructor');
    };
}
a = new Constructor$656();
a.doc();
b = {
    doc: function () {
        console.log('This is a json literal object');
    }
};
b.doc();
var // global
g$658 = GLOBAL || document;
g$658.doc = g$658.doc || {};
g$658.doc.Jquery = function () {
    console.log('Some global documentation for $\'s Jquery');
};
Jquery = { thisIs: 'untouched' };
doc.Jquery();
console.log(Jquery);
var d$659 = {};
d$659.doc = function () {
    console.log('Tack on documentation later');
};
d$659.doc();