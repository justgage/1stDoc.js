macro DOC {
   rule {
      this $y
   } => {
      this.doc = function() {
         console.log($y);
      }
   }

   rule {
      json $y
   } => {
      doc : function() {
         console.log($y);
      }
   }

   rule {
      glob $x $y
   } => {
      var g = GLOBAL || document;
      g.doc = g.doc || {};
      g.doc.$x = function() {
         console.log($y);
      }
   }

   rule {
      module
   } => {
      exports.doc = function() {
         console.log($y);
      }
   }

   // tack it on
   rule {
      $x:expr $y
   } => {
      $x.doc = function() {
         console.log($y);
      }
   }
}

export DOC;
