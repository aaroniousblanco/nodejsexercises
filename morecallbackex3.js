// Async map
//
// Make an array of file names like so:
//
var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];
// Write a program using the async module to create all of these files in the directory, each file should contain the text: "Hello, world!".

var a_sync = require("async");
var fs = require('fs');

function transform(file, callback) {
  var text = "Hello, world!";
  fs.writeFile(file, text, callback);
}

a_sync.map(filenames, transform, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
