/**
@param beforeEach : is a function 'mocha' provide it. Is gonna let us run some code before every single test case,
 we gonna use beforeEach to setup database in the way useful,
 for now all it's to make sure database is empty

This function gonna run before all every test cases
 and it's only gonna move onto the test cases once we call 'done()' ,
 Which mean we can do asynchronous inside of it

@param Todo.remove({}) the side effect using 'beforeEach' in this case is the data in document collection all wipe out.
**/
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// add dummy todos
const todos = [{
    text: "First test todo with mocha, expect and superTest"
}, {
    text: "Second test todo with expect, mocha and superTest"
}];

// adding testing lifecycle method
beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        let text = "Test todo text";

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
    // quick challenge
    // make a post request with send is empty object and cost to fail
    // end it with error checking and make some assumption about the database
    // the assumption you madke is the length of 'todos' is zero
    // since this code does not create 'todo' not 'todo' should be there
    it('should not create todo with invaled body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});