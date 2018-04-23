console.log('starting app.js');

// load in build-in module in node

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

// './' is relative path
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('1'));

//console.log(_.uniq(['agung', 1, 2, 'agung', 1,2,3,4,5,6]));

var filteredArray = _.uniq(['agung', 1, 2, 'agung', 1,2,3,4,5,6]);
console.log(filteredArray);


/*
// pattern to recall function
var res = notes.addNote();
console.log(res);
*/

/**
var resultFromAddFunction = notes.add(5, 6);
console.log(' result is ', resultFromAddFunction);
console.log(' Result is ', notes.add(6, 6));
**/


/**
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

**/

/**
fs.appendFile('selamatMalam.txt',`hello! `$(user.),(err) => {
    if (err) {
        console.log();
    }
});
**/
