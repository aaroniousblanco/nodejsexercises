// Extract a function
//
// Given this code:
//
// var request = require('request');
// var fs = require('fs');
//
// var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
// var filename = 'output.html';
//
// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('It worked');
//   });
// });
// Extract a reusable function saveWebPage(url, filename, callback). You should be able to use the function like so:
//
// saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', function(err) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('It worked.');
// });

var fs = require('fs');
var request = require('request');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}
