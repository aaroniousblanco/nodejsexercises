// Nested Callbacks 1
//
// Rewrite the following code (both the function and the code calling the function) in continuation-passing style:
//
// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);

// function square(num, callback) {
//   callback(num * num);
// }


// Nested Callbacks 2
//
// Same thing but with these:
//
// var x = 4;
// var y = 3;
// // var x2 = square(x);
// square(x, function(x2) {
//
// });
// // var y2 = square(y);
// square(y, function(y2) {
//
// });
// // var sum = x2 + y2;
// square(x, function(x2) {
//   square(y, function(y2) {
//     var sum = x2 + y2;
//     console.log(sum);
//   });
// });

// Nested Callbacks 3

// Same but with this:

// function square(num) {
//   return num * num;
// }

// function squareRoot(num) {
//   return Math.sqrt(num);
// }

// var x = 4;
// var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;
// var answer = squareRoot(sum);
// console.log('The answer is: ' + answer);

// var x = 4;
// var y = 3;
//
// function square(num, callback) {
//   callback(num * num);
// }
//
// function squareRoot(num, callback) {
//   callback(Math.sqrt(num));
// }
//
// square(x, function(x2) {
//   square(y, function(y2) {
//     var sum = y2 + x2;
//     squareRoot(sum, function(z) {
//       console.log('The answer is: ' + z);
//     });
//   });
// });

// CPS: 4
//
// Add a 1000 millisecond delay to the CPS version of the square function you wrote for the last exercise, and a 500 millisecond delay to the squareRoot function. Re-run the code and see that there's a delay before the answer is printed.
var x = 4;
var y = 3;

function square(num, callback) {
  setTimeout(function() {
    callback(num * num);
  }, 1000);
}

function squareRoot(num, callback) {
  setTimeout(function () {
    callback(Math.sqrt(num));
  }, 500);
}

square(x, function(x2) {
  square(y, function(y2) {
    var sum = y2 + x2;
    squareRoot(sum, function(answer) {
      console.log('The answer is: ' + answer);
    });
  });
});
