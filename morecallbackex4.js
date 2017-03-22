// Async map 2
//
// You can use fs.readdir function to list all the files that exist in a directory. Write a program to resize all .png files within a directory into 240x240 thumbnails. Hint: you can use the downloadAndCreateThumbnail function you made.

var fs = require('fs');
var gm = require('gm');
var request = require('request');
var directory = "images";
var a_sync = require("async");

function transform(picture, callback) {
  gm(directory + "/" + picture)
    .resize(100, 100)
    .write(directory + "/" + picture, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
}

fs.readdir(directory, function(err, array) {
  if (err) {
    console.log(err.message);
    return;
  }
  a_sync.map(array, transform, function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('All resized.');
  });
});
