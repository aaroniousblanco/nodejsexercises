// Read a file
//
// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.
//
// Assuming the file file1.txt contains the text: Hello, I am file 1.. Example output:
//
// $ node cap_file.js
// filename: file1.txt
// HELLO, I AM FILE 1.

var fs = require('fs');
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your file? ", function(filename) {
  fs.readFile(filename, function(err, buffer) {
    if (err) {
      console.log(err.message);
      return;
    }
    var contents = buffer.toString();
    var capped = contents.toUpperCase();
    console.log(capped);
  });
});

// Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and it should display something like:
//
// $ node cap_file.js
// filename: blah.txt
// ENOENT: no such file or directory, open 'blah.txt'
