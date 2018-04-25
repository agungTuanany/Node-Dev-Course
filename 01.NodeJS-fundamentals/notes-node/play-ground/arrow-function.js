/**
explaining using arrow function in two different type:
1. arrow function use to passing some statement sysntax
2. arrow function use to passing some expression syntax
    in here you don't need yo put 'return' keyword it's implicitly provided.
**/

var square = (x) => {
    var result = x * x;
    return result;
}
console.log(`This log from square:`, square(9));

// or
var square2 = (x) => x * x;
console.log(`This log from square2:`,square2(9));

// or
// Here since you just have singgle argument in ES6 you can leave it without using a curly-braces
// If you dont have any arguments just use " () => "
var square3 = x => x * x;
console.log(`This log from square3`,square3(9));


/**

explaining differences between regular function and arrow-function

regular function:
    sayHi: function () {

    }

arrow-function :
    sayHI: () => {

    }

@param sayHi Here we try to define a method inside an object
inside sayHi i assign arrow function,

Since arrow function do not bind 'this' keyword. 'this' is binding in parrent function, since theresn't parrent function 'this' refered to global 'this' keyword or undefined.

Arrow function also do not bind argumnet-array.

@param sayHiAlt ES6 provide us new feature to make method inside an object, the way is:
    // just put a singgle white space after you methodName
    methodNmae () {
              ^
}

cause much more error message when you want to try make a method inside an objects by using arrow-function.  look at sayHiAltt method.

**/

var user = {
    name: "john",
    sayhi: () => {
        console.log(`Hi, I'm ${this.name}`);
        // console.log(arguments);
    },
    sayHiAlt () {
        console.log(`Hi, I'm calling you from sayhiAlt method ${this.name}`);
        console.log(arguments);
    }
};

user.sayhi();
// console.log("");
// user.sayhi('sarah', 'john');
console.log("");
user.sayHiAlt(1,2, 'john', 4,5, 'sarah');
