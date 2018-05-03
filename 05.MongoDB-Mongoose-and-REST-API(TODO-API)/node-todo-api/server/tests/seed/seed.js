const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

// add dummy users
const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users =[{
    _id: userOneId,
    email: 'attempt1@localhost.com',
    password: 'attempt!321',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, '4321ytrewq').toString()
    }]
}, {
    _id: userTwoId,
    email:'attempt2@localhost.com',
    password: 'attempt!322'
}];

// add dummy todos
const todos = [{
    _id: new ObjectID(),
    text: "First test todo with mocha, expect and superTest",
    _creator: userOneId
}, {
    _id: new ObjectID(),
    text: "Second test todo with expect, mocha and superTest",
    completed: true,
    completedAt: 123,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};