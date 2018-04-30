/**
@param ObjectID.isValid() : is a function that provide from mongoose (objectId)

If you get error when run the npm test with error code:

    `Uncaught Error: listen EADDRINUSE :::3000`

    Just clean up your localhost server with `killall -9 node` and run the test.

*/
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = "5ae6c47a589dd2319c303a62";//2

if(!ObjectID.isValid(id)) {
    console.log("Id is not valid");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// if you wanna find one Document by something other then _id recomend using findOne()
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// if you wanna find one Document by 'id' recomend using findById()
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log("Todo By Id", todo);
// }).catch((e) => console.log(e));

// quick challenge for User collection
// find user by _id with User findById() in robomongo you pick
// then you gonna handle the three cases
// 1. Queries works but is no user, 2. Queries user was found 3. Handle any errors
// all the three queries should print out

var userEmailId = "5ae5cb36d48e5f30ff3623b"//e

User.findById(userEmailId).then((user) => {
    if(!user) {
        return console.log('User with the Id not in Document');
    }
    console.log(`The user from document: `, JSON.stringify(user, undefined, 3));
}). catch((e) => console.log(e));