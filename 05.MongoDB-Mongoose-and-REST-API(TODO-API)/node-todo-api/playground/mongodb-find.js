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

    // client.db('DatabaseName').collection('tabelName').insertOne({}, () => {});

    db.collection("Todo").find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 3));
    }, (err) => {
        console.log('Unable to fetch Todo', err);
    });


    // client.close();
});