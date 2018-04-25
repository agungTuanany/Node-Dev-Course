/**
callback defenition in  general: is a function that get pass as an argument to antoher function and is executed after some event happen.

An event could be anything, ie. data-base-query(), HttpRequest()

@param userObject all that matter is argument position, we call first argument userObject and the first argument past-back is indeed userObject at 'callback(user)'

**/

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'jono'
    };
    callback(user);
};

getUser(2555, (userObject) => {
    console.log(userObject);
})
