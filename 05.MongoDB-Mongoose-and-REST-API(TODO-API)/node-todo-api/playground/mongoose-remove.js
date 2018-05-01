const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


const id = "5ae6c47a589dd2319c303a62e"//

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: id}).then((result) => {
    console.log(result);
})

Todo.findByIdAndRemove({id}).then((result) => {
    console.log(result);
})