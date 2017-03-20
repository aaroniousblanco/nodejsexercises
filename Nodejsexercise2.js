// DNS lookup
//
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:
//
// $ node dns_lookup.
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.

var fs = require('fs');
var dns = require('dns');
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your domain dude? ", function(host) {
  dns.lookup(host, function(err, ip) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('IP is: ', ip);
  });
});
