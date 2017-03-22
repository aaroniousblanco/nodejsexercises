// Challenge: Resize an image
//
// Write a program to download the JavaScript logo from https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png, and resize it using the gm module to the size 240x240. You might use the request module to download the file. Hint: You will set the encoding option to null for request. Example:
//
// var options = {
//   url: 'http://example.com/example.png',
//   encoding: null
// };
// request(options, function(err, response, imageData) {
//   // save image data and resize
// });

var fs = require('fs');
var gm = require('gm');
var request = require('request');

var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};

request(options, function(err, response, imageData) {
  if (err) {
    console.log(err.message);
    return;
  }
  gm(imageData)
    .resize(240, 240)
    .write('thumbnail.png', function(err) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('It worked!');
    });
});
