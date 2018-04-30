/**
@param ObjectID.isValid() : is a function that provide from mongoose (objectId)
*/
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = "5ae6c47a589dd2319c303a6";//2

if(!ObjectID.isValid(id)) {
    console.log("Id is not valid");
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// if you wanna find one Document by something other then _id recomend using findOne
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// if you wanna find one Document by 'id' recomend using findById
Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log("Todo By Id", todo);
}).catch((e) => console.log(e));

