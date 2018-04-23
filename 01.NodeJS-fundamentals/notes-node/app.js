console.log('starting app.js');

// load in build-in module in node

const fs = require('fs');
const os = require('os');

// './' is relative path
const notes = require('./notes.js')

var user = os.userInfo();
//console.log(user);

// original line on node v-6
// since I using node v-8 NodeJS need upgrade the bug
// fs.appendFile('selamatMalam.txt' hello, world!);


// option for node v-8
fs.appendFile('SelamatMalam.txt' , ` Hello ${user.username} there you are, You are ${notes.age} Years olds`, (err) => {
    if (err) {
        console.log('You missing some thing to write to file');
    }
});

/**
fs.appendFile('selamatMalam.txt',`hello! `$(user.),(err) => {
    if (err) {
        console.log();
    }
});
**/
