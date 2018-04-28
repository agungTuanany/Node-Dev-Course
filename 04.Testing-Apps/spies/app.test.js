/**
@param spies: is let you swap out your real function like saveUser for a testing utility, when that test function get call you can create various assertion about it making sure is call with certain arguments

spies do come build-in with 'expect' module library

@param .createSpy() is gonna return a function and that function is gonna swap-out for the real one.
@param ,toHaveBeenCalled is asserts the given `spy` function gonna cost test will pass when `spy` been called at least once
@param .toHaveBeenCalledWith is asserts the given `spy` function has been called with the expeceted arguments.

@param rewire is a module for test utility for testing function with side-effects.
'rewire' load your file through require but also add two method on to variable 'app'
    app.__set__
    app.__get__

    we can use this to mock up various data inside app.js. That means we make a simulation of 'db' object from db.js we swap-out the function with a spy.

mock-up: contoh bikinan
*/

const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('app', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('it should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Jono', 25);
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Jono', 25);
    });

    it('should call saveUser with user obejct',() => {
        var email = 'Jono@kodamJaya'
        var password = '123abc'

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});