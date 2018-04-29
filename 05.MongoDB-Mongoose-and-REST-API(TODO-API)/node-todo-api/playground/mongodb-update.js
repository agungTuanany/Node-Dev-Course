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

    // db.collection('Todo').findOneAndUpdate({
    //     _id: new ObjectID('5ae571a02311eccd093e8281')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //quick challenge finAndUpdate the Users collection. name Jono update and return to Jaroko
    // db.collection("Users").findOneAndUpdate({
    //     name: 'Jono'
    // }, {
    //     $set: {
    //         name: "Jaroko"
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // quick challenge increment the ages.
    // db.collection("Users").update({
    //     name: "Tiancha"
    // }, {
    //     $inc: {
    //         age: 15
    //     }
    // }).then((result) => {
    //     console.log(result)
    // });

    // quick challenge Rename a field
    // db.collection("Users").findOneAndUpdate({
    //     name: "Jono"
    // }, {
    //     $rename: {
    //         'location': 'address'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // });

    // quick challenge using Increment and Rename a field together
    db.collection("Users").update({
        _id: new ObjectID("5ae57ca5be8173637320c087")
    }, {
        $set: {
            name: 'Jaroko'
        },
        $inc: {
            age: 33
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    client.close();
});

