/**
1. Make folder directory mongo-data
2. connect mongod on terminal with to mongo-data path
    mongod --dbpath ~/yourpath/mongo-data
3. run your node.

@param db.collection() is argument to insert into a new record.
@param (result.ops) , the ops attribut is gonna store all of the docs we inserted @param InsertOne()

object id in _id is made up with 12 byte value
id: 5ae53c9d739af50fea7fcfcf

    5ae5    << first 4 byte is a timestamp
    3c9     << a machine identifier. if two computer generate object id (_id) their machine id gonna be different. To ensure the id is unique
    d7      << process id
    39a     << this is similar what mysql would do. A random value

@param result.ops[0]._id : is to fetch the unique id from the collection that we made.

@param result.ops[0]._id.getTimestamp() : is a function doesn't take any arguments, it's simply return the Timestamp that the obejct id (._id) was created at.

@param {name} OBJECT DESTRUCTURING doing is to let you pull out the properties from the object creating variables.

ES6 destructuring is a fantastic way to make  new variables from object properties

    ei. ES6 destructuring

    var user = {name: 'Jono', age: 25};
    var {name} = user;
*/
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const assert = require('assert');

const url = 'mongodb://localhost:27017'

 const dbName = 'TodoApp'

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    const insertData1 =[ {
        text: 'Something to do',
        completed: false
    }, {
        text: "Something to do 2",
    }];

    const insertData2 = {
        text: 'someting to do from insertData2 data=1',
        completed: false
    };

    // db.collection('Todo').insertOne(insertData2, (err, result) => {
    //     if (err) {
    //         assert.equal(null, err);
    //         return(err);
    //     }
    //     assert.equal(1, result.insertedCount);
    //     console.log(JSON.stringify(result.ops, undefined, 3));
    // });
/*
    client.db('DatabaseName').collection('tabelName').insertOne({}, () => {});
*/
    db.collection('Users').insertMany([{
        name: "Jono",
        age: 25,
        location: 'Kodam Jaya'
    },{
        name: "Jaroko",
        age: 25,
        location: 'Kodim Jaya'
    }, {
        name: "Tiancha",
        age: 32,
        location: 'Koramil Jaya'
    }], (err, result) => {
        if (err) {
            assert.equal(null, err);
            console.log(`Unable to insert user`, err);
        }
        // console.log(`You inserted to database`, result);
        assert.equal(3, result.insertedCount);
        console.log(`assert.equal(3, ${result.insertedCount})`);
        // console.log(JSON.stringify(result.ops, undefined, 3));
        console.log(result.ops);
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});
