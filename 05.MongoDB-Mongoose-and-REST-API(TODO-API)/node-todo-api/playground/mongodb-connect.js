/**
1. Make folder directory mongo-data
2. connect mongod on terminal with to mongo-data path
    mongod --dbpath ~/yourpath/mongo-data
3. run your node.

@param db.collection() is argument to insert into a new record.
@param (result.ops) , the ops attribut is gonna store all of the docs we inserted @param InsertOne()
*/
const MongoClient = require('mongodb').MongoClient;
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
        console.log(`You inserted to database`, result);
        assert.equal(3, result.insertedCount);
        console.log(`assert.equal(3, ${result.insertedCount})`);
        console.log(JSON.stringify(result.ops, undefined, 3));
        console.log(result.ops);
    });
    client.close();
});
