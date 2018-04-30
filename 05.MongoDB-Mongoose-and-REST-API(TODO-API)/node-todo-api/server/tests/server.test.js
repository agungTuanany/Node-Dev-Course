/**
@param beforeEach : is a function 'mocha' provide it. Is  gonna let us run some code before every single test case, we gonna use beforeEach to setup database in the way useful, for now all it's to make sure database is empty

This function gonna run before all every test cases and it's only gonna move onto the test cases once we call 'done()' , Which mean we can do asynchronous inside of it

@param Todo.remove({}) the side effect using 'beforeEach' in this case is the data in document collection all wipe out.
**/
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// adding testing lifecycle method
beforeEach((done) => {
    Todo.remove({}).then(() => done());
})

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

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});