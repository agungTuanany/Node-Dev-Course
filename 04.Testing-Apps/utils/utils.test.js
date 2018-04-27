/**
@param .tes.js , when we use extension '.test.js' we basicly telling our apps this's gonna store our test cases and mocha go throught our apps looking for test to run. So mocha will find this extenstion

@param it , is a function provided by mocha

BDD : Behavior Driven Development, this is a principle that mocha build in
**/

const utils = require('./utils');

it('should add two number', () => {
    let res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error(`Expected 44, but got${res}. `);
    }
});

it('should square one number to ', () => {
    let res = utils.square(4);

    if(res !== 16) {
        throw new Error(`expected 44, but got ${res}`);
    }
});