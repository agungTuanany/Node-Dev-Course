/**
@param Promise function is just only accept one parameter or argument
this argument will be a anonymous arrow function

In here we use two function that promise provide, "resolve" and "reject"

@param .then() was provide callback-function, it is method promise provided.
In promise by using .then() we can use more then one callback-function.
In callback we just can use one callback-function.
ei, for callback that use only once in 'app.js'
 is `geocode.geocode(argument1 , () =>{})`
                                    ^
that is the different using 'promise' and callback.

NOTE:
In Promise you dont have to worry to get callback called twice
In Promise you can provide multiple function
This promise just only run once.
 even you put another case to fetch anohter promise to doing resolve or reject function. 
**/


var somePromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        // resolve('Hey, your fetch it worked');
        reject('Unable to fulfiil promise');
    },2500);
});

somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});
