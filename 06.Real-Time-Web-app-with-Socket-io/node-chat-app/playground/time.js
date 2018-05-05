const moment = require('moment');

// Jan ist 1970 00:00:10 am

// var date = new Date();
// var months = ['Jan, 'Feb']
// console.log(date.getMonths());

// var date = moment();
// date.add(0, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

// var date = moment();
// console.log(date.format('h:mm:a'));
// console.log(date.format(' Do MMM YYYY, HH:mm:a'));
// console.log(date.format('h:mm:a, Do MMM YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var someTimestamp1 = moment().valueOf();
var someTimestamp2 = new Date().getTime();
console.log(someTimestamp1);
console.log(someTimestamp2);

var createdAt = 1000000;
var date = moment(someTimestamp1);
var date2 = moment(someTimestamp2);
console.log(date.format('h:mm:a, Do MMM YYYY'));
console.log(date2.format('h:mm:a, Do MMM YYYY'));