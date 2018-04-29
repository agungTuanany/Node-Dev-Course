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

    //deleteMany
    // db.collection('Users').deleteMany({location: 'Kodam Jaya'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('You have wrong objects or text to delete', err);
    // });

    //deleteOne
    // db.collection('Users').deleteOne({name: 'Tiancha'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('You have wrong object or text to delete',err);
    // });

    //findOneAndDelete
    // db.collection('Todo').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Are you find what you search', err);
    // });


    // quick challenges
    // delete by id with findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: "5ae57c3242947b629f472a98",
        _id: "5ae57cd0f1731764432a7e5d",
        _id: "5ae57ca5be8173637320c089",
        _id: "5ae57c3242947b629f472a9a",
        _id: "5ae574e158637356709c1d06",
        _id: "5ae574d5ad98ab56182c65b5",
    }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log('Are you writing the exact id?', err );
    });

    db.collection('Users').deleteMany({name: 'Jaroko'}).then((result) => {
        console.log(result)
    }, (err) => {
        console.log(err);
    })

    client.close();
});