console.log(' -Starting app');

/**
By using nonblocking I/O we able to wait 2-second -
without preventing the rest of program to execute.

setTimeout function definition: have 2 argument the firs is callback, and the last is delay.

    // 1
    setTimeout(callback, delay);
    // 2
    setTimeout(() => {

    },delay);


**/
setTimeout(() => {
    console.log(' Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Second setTimeot');
},0);

console.log(' Finishing Up!');
