// Async filter
//
// Given an array of file names like:
//
// var filenames = [
//   '1.txt',
//   '2.txt',
//   '3.txt',
//   '4.txt',
//   '5.txt',
//   '6.txt',
//   '7.txt',
//   '8.txt',
//   '9.txt',
//   '10.txt'
// ];
// Use async.filter to return and print only the files in that array which exist in your current directory.

var filenames = [
  'morecallbackex1.js',
  '2.txt',
  '3.txt',
  '4.txt',
  'morecallbackex2.js',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

var fs = require('fs');
var gm = require('gm');
var request = require('request');
var a_sync = require("async");
var directory = "../weekseven";

function doWeWant(item, callback) {
    if (filenames.includes(item)) {
      callback(null, true);
      return;
    } else {
      callback(null, false);
    }
}

fs.readdir(directory, function(err, array) {
  if (err) {
    console.log(err.message);
    return;
  }
  a_sync.filter(array, doWeWant, function(err, data) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data);
  });
});
