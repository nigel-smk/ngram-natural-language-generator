#!/usr/local/bin/node


var ngrams = require('./lib/ngrams').buildNgrams;
var nlg = require('./lib/nlg').generateText;

var main = function() {
  if (process.argv.length > 2) {

    ngrams({
      filename: process.argv[2]
    }, function(model){
      console.log('Generated model ', model);

      var sentence = nlg();
      console.log(sentence);
    });
  }
};

try {
  main();
} catch (e) {
  console.log(e.stack);
}
