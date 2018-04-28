/**
@param .tes.js , when we use extension '.test.js' we basicly telling our apps this's gonna store our test cases and mocha go throught our apps looking for test to run. So mocha will find this extenstion

@param it , is a function provided by mocha

BDD : Behavior Driven Development, this is a principle that mocha build in

specific using nodemon:
    nodemon --exec 'npm test'
    or
    "nodemon --exec \"npm test\"" << type it in package.json under script

Using An Assertion Library.
go to https://github.com/mjackson/expect

@param toNotBe is not working for object.
@param toEqual is working for object and array.
@param toInclude is better use for array and object
@param toExclude is better use for array and object

**/
const expect = require('expect');

const utils = require('./utils');

it('should add two number', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got${res}. `);
    // }
});

it('should square one number to ', () => {
    let res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
});

// should verify first and last name are set
// asserts it includes firstName and lastName with proper values
it('should set firstName and LastName', () => {
    let user = {location: 'Kodam Jaya', age: 25}
    let res = utils.setName(user, 'Jono Mayor' );

    expect(res).toInclude({
        firstName: 'Jono',
        lastName: 'Mayor'
    });
        // excpect(user).toEqual(res);
});

// it('should expect some values', () => {
//     expect(12).toNotBe(12);
//     expect({name: 'Jono'}).toEqual({name : 'jono'});
//     expect([2,3,4]).toInclude(3);
//     expect([2,3,4]).toExclude(5);
//     expect({
//         name: "jono",
//         age: 25,
//         location: "Kodam Jaya"
//     }).toInclude({
//         age: 25,
//         location: "kodam Jaya"
//     })
//     expect({
//         name: "jono",
//         age: 25,
//         location: "Kodam Jaya"
//     }).toExclude({
//         age: 25,
//         location: "kodam Jaya"
//     })
// });
